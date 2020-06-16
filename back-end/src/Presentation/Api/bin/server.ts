import "../../../Environment";
import "reflect-metadata";
import DiContainer from '../../../CrossCutting/IoC/Container';

import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import swaggerDocument from "../Documentation/swagger";

import { GlobalErrorHandler } from "../Middlewares/GlobalErrorHandler";
import Routes from "../Routes";
import ClusterMode from '../../../CrossCutting/Cluster';
import MorganLogger from '../Middlewares/Morgan/index';
import { TYPES } from "../../../CrossCutting/IoC/Types";
import { inject, injectable } from "inversify";

@injectable()
class Server {

    public app: express.Application;
    private port: string | undefined;
    private clusterEnabledMode: boolean;
    private routes: Routes;


    constructor(@inject(TYPES.Routes) routes: Routes) {
        this.port =  process.env.PORT;
        this.clusterEnabledMode = Boolean(process.env.CLUSTER_ENABLED);
        this.app = express();
        this.routes = routes;
        this.LoadingMiddleware();
        this.loadingDocumentation();
        this.loadingRoutes();
        this.ErrorHandler();

    }

    private LoadingMiddleware() {
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(
            cors({
                origin: "*",
                allowedHeaders: ["Content-Type", "Authorization", "Accept"],
                methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
            })
        );
        MorganLogger(this.app, process.env.MORGAN_ENABLED);
    }

    private loadingRoutes() {
        this.app.use(this.routes.returnRoutes());
    }

    private loadingDocumentation() {
        this.app.use(
            `${process.env.DOC_VERSION}/api-docs`,
            swaggerUi.serve,
            swaggerUi.setup(swaggerDocument)
        );
    }

    private ErrorHandler() {
        this.app.use(GlobalErrorHandler);
    }

    public Listen(clusterId?: number) {

        this.app.listen(this.port, () => {
            clusterId ?
            console.log(`\x1b[34mCLUSTER ID: \x1b[37m${clusterId}`) : "";
            this.Logotype(this.port);
        })
    }

    public ListenClusterMod() {
        ClusterMode((id: number) => this.Listen(id), 0, this.clusterEnabledMode);
    }

    private Logotype(port: string | undefined) {
        console.log(`\x1b[35mAPI RUNNING - PORT: \x1b[37m${port}\x1b[0m`);
        console.log(`
              ╔═╗╔═╗╦  ╔═╗ ╦ ╦╔═╗╦  ╦╔═╗╔═╗╦═╗╔═╗  ╔═╗╦  ╦╔═╗╔╗╔╔╦╗
              ╠═╣╠═╝║  ║═╬╗║ ║╠═╣║  ║║  ║ ║╠╦╝╠═╝  ║  ║  ║║╣ ║║║ ║ 
              ╩ ╩╩  ╩  ╚═╝╚╚═╝╩ ╩╩═╝╩╚═╝╚═╝╩╚═╩    ╚═╝╩═╝╩╚═╝╝╚╝ ╩ 
          `);
    }

}

export default Server;
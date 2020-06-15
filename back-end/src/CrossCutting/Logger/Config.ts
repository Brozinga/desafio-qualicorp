import { createLogger, transports } from "winston";
import moment from "moment";

import IloggerGeneration from "./contracts/iLoggerGeneration";

class LoggerGeneration implements IloggerGeneration {
    public Configure(localization: string) {

        let options = this.Options(localization);

        let winstonConfigured = createLogger({
            level: "error",
            transports: [
                new transports.File(options.file),
                new transports.Console(options.console)
            ],
            exitOnError: false
        });



        return winstonConfigured;

    };

    private Options(localization: string) {
        return {
            file: {
                level: "error",
                filename: `./${localization}/erros_${moment
                    .utc()
                    .format("YYYY-MM-DD")}.log`,
                handleExceptions: true,
                json: true,
                maxsize: 5242880,
                maxFiles: 5,
                colorize: false
            },
            console: {
                level: "error",
                handleExceptions: true,
                json: true,
                colorize: true
            }
        }
    }
    public async Write(message: any, encoding?: any) {
        let winston = this.Configure("logs");
        winston.error(message);
    }

}


export default LoggerGeneration;
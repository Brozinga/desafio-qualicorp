import { Request, Response } from "express";
import CreateClientHandler from "../../../Application/Handlers/Clients/CreateClientHandler";
import UpdateClientHandler from '../../../Application/Handlers/Clients/UpdateClientHandler';
import DeleteClientHandler from '../../../Application/Handlers/Clients/DeleteClientHandler';
import GetAllClientsHandler from "../../../Application/Handlers/Clients/GetAllClientsHandler";
import GetClientByIdHandler from '../../../Application/Handlers/Clients/GetClientByIdHandler';
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../../../CrossCutting/IoC/Types";


@injectable()
export default class ClientController {
    
    private createHandler: CreateClientHandler;
    private updateHandler: UpdateClientHandler;
    private deleteHandler: DeleteClientHandler;
    private getAllHandler: GetAllClientsHandler;
    private getByIdHandler: GetClientByIdHandler;

    constructor(
       @inject(TYPES.CreateClientHandler) createHandler: CreateClientHandler, 
       @inject(TYPES.UpdateClientHandler) updateHandler: UpdateClientHandler, 
       @inject(TYPES.DeleteClientHandler) deleteHandler: DeleteClientHandler, 
       @inject(TYPES.GetAllClientsHandler) getAllHandler: GetAllClientsHandler, 
       @inject(TYPES.GetClientByIdHandler) getByIdHandler: GetClientByIdHandler) {
        this.createHandler = createHandler;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
        this.getAllHandler = getAllHandler;
        this.getByIdHandler = getByIdHandler;
    }

    public GetAll = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.getAllHandler.Handle(null);
        return res.status(response.status).json(response);
    }

    public GetById = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.getByIdHandler.Handle({ id: req.params.id });
        return res.status(response.status).json(response);
    }

    public Post = async (req: Request, res: Response): Promise<Response> => {

        const response = await this.createHandler.Handle(req.body);
        return res.status(response.status).json(response);
    }

    public Put = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.updateHandler.Handle({
            ...req.body,
            id: req.params.id
        });
        return res.status(response.status).json(response);
    }

    public Delete = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.deleteHandler.Handle({ id: req.params.id });
        return res.status(response.status).json(response);
    }

}

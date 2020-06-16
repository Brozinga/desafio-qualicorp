import IHandler from "../../Contracts/IHandler";
import IClientRepository from "../../../Domain/Contracts/Repositories/IClientRepository";
import IHttpResponse from "../../../Domain/Contracts/Responses/IHttpResponse";
import BasicResponse from "../../../Domain/Responses/BasicResponse";
import ClientMapper from "../../Mappers/ClientMapper";
import CustomNotification from "../../../Domain/Responses/CustomNotification";
import { Guid } from "guid-typescript";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../CrossCutting/IoC/Types";
import { json } from 'express';

@injectable()
export default class GetClientByIdHandler implements IHandler {

    private repository: IClientRepository;

    constructor(@inject(TYPES.ClientRepository) repository: IClientRepository) {
        this.repository = repository;
    }

    async Handle(request: any): Promise<IHttpResponse> {
        
        if (!Guid.isGuid(request.id))
            return new BasicResponse(false, new CustomNotification("Id", "Id is invalid"), 400);

        const client = ClientMapper(await this.repository.GetById(request.id));

        if (client.length <= 0)
            return new BasicResponse(false, new CustomNotification("Client", "Client not found"), 404);

        return new BasicResponse(true, client, 200);
    }

}
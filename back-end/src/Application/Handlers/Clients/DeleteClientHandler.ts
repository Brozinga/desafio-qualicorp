import IHandler from "../../Contracts/IHandler";
import IClientRepository from "../../../Domain/Contracts/Repositories/IClientRepository";
import IHttpResponse from "../../../Domain/Contracts/Responses/IHttpResponse";
import BasicResponse from "../../../Domain/Responses/BasicResponse";
import CustomNotification from "../../../Domain/Responses/CustomNotification";
import { Guid } from "guid-typescript";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../CrossCutting/IoC/Types";
import ClientMapper from "../../Mappers/ClientMapper";

@injectable()
export default class DeleteClientHandler implements IHandler {

    private repository: IClientRepository;

    constructor(@inject(TYPES.ClientRepository) repository: IClientRepository) {
        this.repository = repository;
    }

    async Handle(request: any): Promise<IHttpResponse> {

        if (Guid.isGuid(`"${request.id}"`))
            return new BasicResponse(false, new CustomNotification("Id", "Id is invalid"), 400);

        const client = ClientMapper(await this.repository.GetById(request.id));

        if (client.length <= 0)
            return new BasicResponse(false, new CustomNotification("Client", "Client not found"), 404);

        const deleted = await this.repository.Delete(request.id);

        return new BasicResponse(true, deleted.summary.counters.updates(), 200);
    }

}
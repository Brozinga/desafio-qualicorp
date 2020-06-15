import IHandler from "../../Contracts/IHandler";
import IClientRepository from "../../../Domain/Contracts/Repositories/IClientRepository";
import IHttpResponse from "../../../Domain/Contracts/Responses/IHttpResponse";
import BasicResponse from "../../../Domain/Responses/BasicResponse";
import ClientMapper from "../../Mappers/ClientMapper";
import CustomNotification from "../../../Domain/Responses/CustomNotification";
import { injectable, inject } from "inversify";
import { TYPES } from "../../../CrossCutting/IoC/Types";

@injectable()
export default class GetAllClientsHandler implements IHandler {

    private repository: IClientRepository;

    constructor(@inject(TYPES.ClientRepository) repository: IClientRepository) {
        this.repository = repository;
    }

    async Handle(request: any): Promise<IHttpResponse> {

        const allClients = ClientMapper(await this.repository.GetAll());

        if (allClients.length <= 0)
            return new BasicResponse(false, new CustomNotification("Clients", "Clients not found"), 404);

        return new BasicResponse(true, allClients, 200);
    }

}
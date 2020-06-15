import IHandler from "../../Contracts/IHandler";
import IClientRepository from "../../../Domain/Contracts/Repositories/IClientRepository";
import IHttpResponse from "../../../Domain/Contracts/Responses/IHttpResponse";
import CLient from "../../../Domain/Entities/Client";
import BasicResponse from "../../../Domain/Responses/BasicResponse";
import ClientMapper from "../../Mappers/ClientMapper";
import CustomNotification from "../../../Domain/Responses/CustomNotification";
import { injectable, inject } from "inversify";
import { TYPES } from "../../../CrossCutting/IoC/Types";
import ConvertStringToBoolean from "../../../CrossCutting/BooleanParse";

@injectable()
export default class UpdateClientHandler implements IHandler {

    private repository: IClientRepository;

    constructor(@inject(TYPES.ClientRepository) repository: IClientRepository) {
        this.repository = repository;
    }

    async Handle(request: any): Promise<IHttpResponse> {
        const client = new CLient(request.id, request.name, new Date(request.birthday), request.email,  ConvertStringToBoolean(request.isActive));

        const validation = client.Validate();

        if (validation.IsInvalid)
            return new BasicResponse(false, validation.Notifications, 400);

        const clientByRepository = ClientMapper(await this.repository.GetById(request.id));

        if (clientByRepository.length <= 0)
            return new BasicResponse(false, new CustomNotification("Client", "Client not found"), 404);


        if (client.email !== clientByRepository[0].email) {
            let validationEmail = ClientMapper(await this.repository.Where("Email", client.email));

            if (validationEmail.length > 0) 
                return new BasicResponse(false, new CustomNotification("Email", "Email already in use"), 400);
        }
        
        const valueUpdated = await this.repository.Put(client);

        const result = ClientMapper(valueUpdated);

        return new BasicResponse(true, result, 200);
    }

}
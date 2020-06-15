import IHandler from '../../Contracts/IHandler';
import IHttpResponse from '../../../Domain/Contracts/Responses/IHttpResponse';
import IClientRepository from '../../../Domain/Contracts/Repositories/IClientRepository';
import CLient from '../../../Domain/Entities/Client';
import BasicResponse from '../../../Domain/Responses/BasicResponse';
import ClientMapper from '../../Mappers/ClientMapper';
import CustomNotification from '../../../Domain/Responses/CustomNotification';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../../CrossCutting/IoC/Types';
import ConvertStringToBoolean from '../../../CrossCutting/BooleanParse';

@injectable()
export default class CreateClientHandler implements IHandler {
    
    private repository: IClientRepository;

    constructor(@inject(TYPES.ClientRepository) repository: IClientRepository) {
            this.repository = repository;
    }
    
    async Handle(request: any): Promise<IHttpResponse> {
        const client = new CLient(null, request.name, new Date(request.birthday), request.email, ConvertStringToBoolean(request.isActive));
        const validation = client.Validate();

        if(validation.IsInvalid)
            return new BasicResponse(false, validation.Notifications, 400);

        let validationEmail =  ClientMapper(await this.repository.Where("Email", client.email));
        
        if(validationEmail.length > 0)
            return new BasicResponse(false, new CustomNotification("Email", "Email already in use"), 400);

        const valueInserted = await this.repository.Insert(client);
        const result = ClientMapper(valueInserted);
        
        return new BasicResponse(true, result, 201);
    }

}
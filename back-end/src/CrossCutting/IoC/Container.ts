import { Container } from "../../../node_modules/inversify";

import { TYPES } from "../../CrossCutting/IoC/Types"

import CreateClientHandler from '../../Application/Handlers/Clients/CreateClientHandler';
import UpdateClientHandler from '../../Application/Handlers/Clients/UpdateClientHandler';
import DeleteClientHandler from '../../Application/Handlers/Clients/DeleteClientHandler';
import GetAllClientsHandler from '../../Application/Handlers/Clients/GetAllClientsHandler';
import GetClientByIdHandler from '../../Application/Handlers/Clients/GetClientByIdHandler';
import ClientController from '../../Presentation/Api/Controllers/ClientsController';

import Routes from '../../Presentation/Api/Routes';
import IClientRepository from '../../Domain/Contracts/Repositories/IClientRepository';
import ClientRepository from '../../Infrastructure/Repository/ClientRepository';
import DatabaseContext from '../../Infrastructure/Context/DatabaseClients';
import Server from "../../Presentation/Api/bin/server";

let DiContainer = new Container();

DiContainer.bind<CreateClientHandler>(TYPES.CreateClientHandler).to(CreateClientHandler);
DiContainer.bind<UpdateClientHandler>(TYPES.UpdateClientHandler).to(UpdateClientHandler);
DiContainer.bind<DeleteClientHandler>(TYPES.DeleteClientHandler).to(DeleteClientHandler);
DiContainer.bind<GetAllClientsHandler>(TYPES.GetAllClientsHandler).to(GetAllClientsHandler);
DiContainer.bind<GetClientByIdHandler>(TYPES.GetClientByIdHandler).to(GetClientByIdHandler);

DiContainer.bind<ClientController>(TYPES.ClientController).to(ClientController);

DiContainer.bind<Routes>(TYPES.Routes).to(Routes);

DiContainer.bind<IClientRepository>(TYPES.ClientRepository).to(ClientRepository);

DiContainer.bind<DatabaseContext>(TYPES.DatabaseContext).to(DatabaseContext);

DiContainer.bind<Server>(TYPES.Server).to(Server);


export default DiContainer;


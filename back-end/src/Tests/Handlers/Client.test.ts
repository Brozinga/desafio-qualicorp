import "reflect-metadata";
import "../../Environment/index";
import CreateHandler from '../../Application/Handlers/Clients/CreateClientHandler';
import UpdateHandler from '../../Application/Handlers/Clients/UpdateClientHandler';
import DeleteHandler from '../../Application/Handlers/Clients/DeleteClientHandler';
import GetByIdHandler from '../../Application/Handlers/Clients/GetClientByIdHandler';
import GetAllHandler from '../../Application/Handlers/Clients/GetAllClientsHandler';
import ClientRepositoryMock from '../_Mocks/ClienteRepository.mock';



describe("Criando Um usuário", () => {

    const create = new CreateHandler(new ClientRepositoryMock());
    let requestCorrect = {name: "Fernando Moraes", birthday: "1994-08-08T03:00:00", email: "meuemail@empresa.com.br", isActive: "true"};
    let requestFail = {name: "Fe", birthday: "1994-08-08T03:00:00", email: "meuemailempresa.com.br", isActive: ""};

    it("Sucesso", async () => {
        const result = await create.Handle(requestCorrect);

        expect(result.status).toEqual(201);
        expect(result.code).toBeUndefined();
        expect(result.success).toEqual(true);
    });

    it("Falha", async () => {

        const result = await create.Handle(requestFail);

        expect(result.status).toEqual(400);
        expect(result.message).toBeDefined();
        expect(result.success).toEqual(false);
    });
});

describe("Atualizar um usuário", () => {

    const update = new UpdateHandler(new ClientRepositoryMock());
    let requestCorrect = {name: "Fernando Moraes", birthday: "1994-08-08T03:00:00", email: "meuemail@empresa.com.br", isActive: "true"};
    let requestFail = {name: "Fe", birthday: "1994-08-08T03:00:00", email: "meuemailempresa.com.br", isActive: ""};

    it("Sucesso", async () => {
        const result = await update.Handle(requestCorrect);

        expect(result.status).toEqual(200);
        expect(result.code).toBeUndefined();
        expect(result.success).toEqual(true);
    });

    it("Falha", async () => {

        const result = await update.Handle(requestFail);

        expect(result.status).toEqual(400);
        expect(result.message).toBeDefined();
        expect(result.success).toEqual(false);
    });
});


describe("Deletando um usuário", () => {

    const remove = new DeleteHandler(new ClientRepositoryMock());
    let requestCorrect = {id: "b3817750-ddf1-4c3d-944b-73b502dfd4d8"};
    let requestFail = {id: "1234"};
  
    it("Sucesso", async () => {
        const result = await remove.Handle(requestCorrect);

        expect(result.status).toEqual(200);remove
        expect(result.code).toBeUndefined();
        expect(result.success).toEqual(true);
    });

    it("Falha", async () => {

        const result = await remove.Handle(requestFail);

        expect(result.status).toEqual(400);
        expect(result.message).toBeDefined();
        expect(result.success).toEqual(false);
    });
});

describe("Pegando um usuário pelo Id", () => {

    const getId = new GetByIdHandler(new ClientRepositoryMock());
    let requestCorrect = {id: "b3817750-ddf1-4c3d-944b-73b502dfd4d8"};
    let requestFail = {id: "1234"};
  
    it("Sucesso", async () => {
        const result = await getId.Handle(requestCorrect);

        expect(result.status).toEqual(200);
        expect(result.code).toBeUndefined();
        expect(result.success).toEqual(true);
    });

    it("Falha", async () => {

        const result = await getId.Handle(requestFail);

        expect(result.status).toEqual(400);
        expect(result.message).toBeDefined();
        expect(result.success).toEqual(false);
    });
});

describe("Pegando Todos os Usuários", () => {

    const getAll = new GetAllHandler(new ClientRepositoryMock());

  
    it("Sucesso", async () => {
        const result = await getAll.Handle(null);

        expect(result.status).toEqual(200);
        expect(result.code).toBeUndefined();
        expect(result.success).toEqual(true);
    });
});
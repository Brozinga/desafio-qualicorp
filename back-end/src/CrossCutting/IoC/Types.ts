const TYPES = {
    CreateClientHandler: Symbol.for("CreateClientHandler"),
    UpdateClientHandler: Symbol.for("UpdateClientHandler"),
    DeleteClientHandler: Symbol.for("DeleteClientHandler"),
    GetAllClientsHandler: Symbol.for("GetAllClientsHandler"),
    GetClientByIdHandler: Symbol.for("GetClientByIdHandler"),

    ClientController: Symbol.for("ClientController"),

    Routes: Symbol.for("Routes"),
    
    ClientRepository: Symbol.for("ClientRepository"),
    
    DatabaseContext: Symbol.for("DatabaseContext"),

    Server: Symbol.for("Server"),
    

};

export { TYPES };

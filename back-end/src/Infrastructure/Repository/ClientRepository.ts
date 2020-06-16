import IClientRepository from '../../Domain/Contracts/Repositories/IClientRepository';
import Client from "../../Domain/Entities/Client";
import DatabaseContext from '../Context/DatabaseClients';
import { Session, QueryResult } from 'neo4j-driver';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../CrossCutting/IoC/Types';

@injectable()
export default class ClientRepository implements IClientRepository {

    private connection: DatabaseContext;
    private db: Session;

    constructor(@inject(TYPES.DatabaseContext) connection: DatabaseContext) {
        this.connection = connection;
        this.db = this.connection.GetDatabase();
    }


    async GetAll(): Promise<any> {
        let query = `MATCH (c:Client) 
        RETURN c.id as id, c.name as name, c.birthday as birthday, 
        c.email as email, c.isActive as isActive, c.createdAt as createdAt, 
        c.updatedAt as updatedAt ORDER BY c.createdAt DESC`

        let result = await this.db.run(query);
        return result;
    }

    async GetById(id: string): Promise<any> {
        let query = `MATCH (c:Client) WHERE c.id = $id
        RETURN c.id as id, c.name as name, c.birthday as birthday, 
        c.email as email, c.isActive as isActive, c.createdAt as createdAt, 
        c.updatedAt as updatedAt ORDER BY c.createdAt DESC`

        let result = await this.db.run(query, { id });

        return result;

    }

    async Insert(client: Client): Promise<any> {
        let query = `CREATE (c:Client{id: $id, name: $name, 
            birthday: $birthday, email: $email, 
            isActive: $isActive, createdAt: $createdAt})  
            RETURN c.id as id, c.name as name, c.birthday as birthday, 
            c.email as email, c.isActive as isActive, c.createdAt as createdAt, 
            c.updatedAt as updatedAt ORDER BY c.createdAt DESC`


        let result = await this.db.run(query, client.GetClientConvertToPrimitive());

        return result;
    }

    async Put(client: Client): Promise<any> {
        let query = `MATCH (c:Client) WHERE c.id = $id
        SET c.name = $name, c.birthday = $birthday, c.email = $email,
        c.isActive = $isActive, c.updatedAt = $updatedAt
        RETURN c.id as id, c.name as name, c.birthday as birthday, 
        c.email as email, c.isActive as isActive, c.createdAt as createdAt, 
        c.updatedAt as updatedAt ORDER BY c.createdAt DESC`

        client.SetUpdatedAt();
        let result = await this.db.run(query, client.GetClientConvertToPrimitive());

        return result;
    }

    async Delete(id: string): Promise<any> {

        let query = `MATCH (c:Client) WHERE c.id = $id DELETE c`
        let result = await this.db.run(query, { id });

        return result;
    }

    async Where(propertyName: string, propertyValue: string): Promise<any> {
        let query = `MATCH (c:Client) WHERE c.${propertyName} = $${propertyName}
        RETURN c.id as id, c.name as name, c.birthday as birthday, 
        c.email as email, c.isActive as isActive, c.createdAt as createdAt, 
        c.updatedAt as updatedAt ORDER BY c.createdAt DESC`

        let result = await this.db.run(query, {
            [propertyName] : propertyValue
        });
        return result;
    }
}
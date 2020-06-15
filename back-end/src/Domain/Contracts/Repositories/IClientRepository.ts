import Client from "../../Entities/Client";
import { Guid } from 'guid-typescript';
import { QueryResult } from "neo4j-driver";

export default interface IClientRepository {

    GetAll() : Promise<QueryResult>;
    GetById(id: string) :  Promise<QueryResult>;
    Insert(client: Client) : Promise<QueryResult>;
    Put(client: Client) : Promise<QueryResult>;
    Delete(id: string): Promise<QueryResult>;
    Where(propertyName: string, propertyValue: string): Promise<QueryResult>;
}
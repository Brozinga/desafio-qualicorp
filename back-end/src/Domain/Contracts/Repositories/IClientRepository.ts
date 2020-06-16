import Client from "../../Entities/Client";
import { Guid } from 'guid-typescript';
import { QueryResult } from "neo4j-driver";

export default interface IClientRepository {

    GetAll() : Promise<any>;
    GetById(id: string) :  Promise<any>;
    Insert(client: Client) : Promise<any>;
    Put(client: Client) : Promise<any>;
    Delete(id: string): Promise<any>;
    Where(propertyName: string, propertyValue: string): Promise<any>;
}
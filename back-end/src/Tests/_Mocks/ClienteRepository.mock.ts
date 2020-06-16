import IClientRepository from '../../Domain/Contracts/Repositories/IClientRepository';
import { Record } from 'neo4j-driver';
import Client from '../../Domain/Entities/Client';


export default class ClientRepositoryMock implements IClientRepository {

    async GetAll(): Promise<any> {
        let list: any[] = [];

        let client = new Client("b3817750-ddf1-4c3d-944b-73b502dfd4d8", "Fernando Moraes", new Date(1994, 6, 8), "fernando.moraes@outraempresa.com.br", true);

        list.push({
            keys: Object.keys(client),
            values: Object.values(client),
            toObject: client,
            get: (prop: string) => {
                let item: any = client.GetClientConvertToPrimitive();
                return item[prop];
            }

        });

        return new Promise((resolve, reject) => {
            resolve({
                records: list,
                sumary: {

                }
            })
        })
    }

    async GetById(id: string): Promise<any> {
        let list: any[] = [];

        let client = new Client("b3817750-ddf1-4c3d-944b-73b502dfd4d8", "Fernando Moraes", new Date(1994, 6, 8), "fernando.moraes@outraempresa.com.br", true);

       
        list.push({
            keys: Object.keys(client),
            values: Object.values(client),
            toObject: client,
            get: (prop: string) => {
                let item: any = client.GetClientConvertToPrimitive();
                return item[prop];
            }

        });

        return new Promise((resolve, reject) => {
            resolve({
                records: list,
                sumary: {

                }
            })
        })
    }

    async Insert(client: Client): Promise<any> {
        let list: any[] = [];

       
        list.push({
            keys: Object.keys(client),
            values: Object.values(client),
            toObject: client,
            get: (prop: string) => {
                let item: any = client.GetClientConvertToPrimitive();
                return item[prop];
            }

        });

        return new Promise((resolve, reject) => {
            resolve({
                records: list,
                sumary: {

                }
            })
        })
    }

    async Put(client: Client): Promise<any> {
        let list: any[] = [];

       
        list.push({
            keys: Object.keys(client),
            values: Object.values(client),
            toObject: client,
            get: (prop: string) => {
                let item: any = client.GetClientConvertToPrimitive();
                return item[prop];
            }

        });

        return new Promise((resolve, reject) => {
            resolve({
                records: list,
                sumary: {

                }
            })
        })
    }

    async Delete(id: string): Promise<any> {
        let list: any[] = [];

        let client = new Client("b3817750-ddf1-4c3d-944b-73b502dfd4d8", "Fernando Moraes", new Date(1994, 6, 8), "fernando.moraes@outraempresa.com.br", true);

       
        list.push({
            keys: Object.keys(client),
            values: Object.values(client),
            toObject: client,
            get: (prop: string) => {
                let item: any = client.GetClientConvertToPrimitive();
                return item[prop];
            }

        });

        return new Promise((resolve, reject) => {
            resolve({
                records: list,
                summary: {
                    counters : {
                        updates() {
                            return {
                                nodeDeleted: 1
                            }
                        }
                    }
                }
            })
        })
    }

    async Where(propertyName: string, propertyValue: string): Promise<any> {
        let list: any[] = [];

        let client = new Client("b3817750-ddf1-4c3d-944b-73b502dfd4d8", "Fernando Moraes", new Date(1994, 6, 8), "fernando.moraes@outraempresa.com.br", true);

       
        list.push({
            keys: Object.keys(client),
            values: Object.values(client),
            toObject: client,
            get: (prop: string) => {
                let item: any = client.GetClientConvertToPrimitive();
                return item[prop];
            }

        });

        return new Promise((resolve, reject) => {
            resolve({
                records: [],
                sumary: {

                }
            })
        })
    }
}
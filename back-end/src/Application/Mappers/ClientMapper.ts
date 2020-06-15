import { QueryResult } from 'neo4j-driver';
import Client from "../../Domain/Entities/Client";
export default function ClientMapper(baseResponse: QueryResult) {
    let clientList: Client[] = [];

    baseResponse.records.forEach((value) => {

        clientList.push(
            new Client(value.get("id"), value.get("name"), value.get("birthday"), 
            value.get("email"), value.get("isActive"), value.get("createdAt"), value.get("updatedAt")));
    });

    return clientList;
}
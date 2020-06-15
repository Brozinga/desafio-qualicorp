import { json } from "express";

export default function ConvertObjectToString(obj: any, propertyName: string) {

    return JSON.stringify(obj.toString());
}
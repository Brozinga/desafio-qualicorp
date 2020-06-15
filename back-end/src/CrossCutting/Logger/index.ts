import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import IloggerGeneration from './contracts/iLoggerGeneration';
import IHttpResponse from '../../Domain/Contracts/Responses/IHttpResponse';

import ConvertObjectToString from '../ConvertObjectToString/index';
import Ilogger from './Contracts/iLogger';
import BasicResponse from '../../Domain/Responses/BasicResponse';

const stringErrorProduction = { error: "Ouve um erro no servidor, fale com o Administrador!" };

 export default class Logger implements Ilogger {

    private logger: IloggerGeneration;
    private errorCode: string;
    private env: boolean;
    private hourNow: string;

    constructor(logger: IloggerGeneration) {
        this.logger = logger; 
        this.errorCode = uuidv4().toUpperCase();
        this.env = process.env.NODE_ENV !== "development" ? true : false;
        this.hourNow = moment.utc().format("DD-MM-YYYY HH:mm:ss");
    }

    public saveError(error: Error, status: number): IHttpResponse {
        
        let errorConverted = ConvertObjectToString(error, "errorMessage");
      console.log(errorConverted)

        switch (status) {
            case 400:
              return new BasicResponse(false, errorConverted, 400);
        
            case 401:
              return  new BasicResponse(false, errorConverted, 401);
        
            case 403:
              return  new BasicResponse(false, errorConverted, 403);
        
            case 404:
              return new BasicResponse(false, errorConverted, 404);
        
            default:
              this.logger.Write( `DATA: ${this.hourNow} | STATUS: ${status} | CODIGO: ${this.errorCode} | ERRO: ${error}`);
              
              return this.env
                ? new BasicResponse(false, stringErrorProduction, 500, this.errorCode)
                : new BasicResponse(false, errorConverted, 500, this.errorCode);
          }

     }






}
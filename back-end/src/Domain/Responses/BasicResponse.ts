import IHttpResponse from '../Contracts/Responses/IHttpResponse';

export default class BasicResponse implements IHttpResponse {
    success: boolean;
    message: any;
    status: number;
    code?: string | undefined;
 
    constructor (success : boolean, message : any, status : number, code? : string) {
            this.success = success;
            this.message = message;
            this.status = status;
            this.code = code;
    }
    
}
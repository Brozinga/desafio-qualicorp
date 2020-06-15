import IHttpResponse from '../../../Domain/contracts/Responses/IHttpResponse';
export default interface Ilogger {
    saveError(error: Error, status: number) : IHttpResponse;
}
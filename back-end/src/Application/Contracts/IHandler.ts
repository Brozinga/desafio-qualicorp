import IHttpResponse from '../../Domain/Contracts/Responses/IHttpResponse';

export default interface IHandler {
    Handle(request: any): Promise<IHttpResponse>
}
export default interface IHttpResponse {
    success: boolean;
    message: object;
    status: number;
    code?: string;
}
export default interface IloggerGeneration {
    Configure(localization: string): any;
    Write(message: any, encoding?: any): any;
}
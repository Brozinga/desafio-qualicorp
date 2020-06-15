import INotification from '../Contracts/Responses/INotification';

export default class CustomNotification implements INotification {
    property: string;
    value?: any;
    constructor(property: string, value: any) {
        this.property = property;
        this.value = value;
    }
}
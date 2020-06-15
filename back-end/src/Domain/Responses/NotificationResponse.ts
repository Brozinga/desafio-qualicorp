import INotificationResponse from '../Contracts/Responses/INotificationsResponse';
import { ValidationError } from 'class-validator';


export default class Notifications implements INotificationResponse {
    IsInvalid: boolean;
    IsValid: boolean;
    Notifications: ValidationError[] | null;

    constructor(isValid: boolean, notifications: ValidationError[] | null) {
        this.IsValid = isValid;
        this.IsInvalid = !isValid;
        this.Notifications = notifications;
    }
}
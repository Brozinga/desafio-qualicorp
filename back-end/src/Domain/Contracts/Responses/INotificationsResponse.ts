import { ValidationError } from "class-validator";

export default interface INotificationsResponse {
    IsInvalid: boolean;
    IsValid: boolean;
    Notifications: ValidationError[] | null;
}

import { Length, IsEmail, IsDate, IsBoolean, validateSync, IsUUID } from "class-validator";
import { Guid } from "guid-typescript";
import BaseEntity from './BaseEntity';
import moment from 'moment';
import INotificationResponse from '../Contracts/Responses/INotificationsResponse';
import Notifications from "../Responses/NotificationResponse";

export default class CLient extends BaseEntity {

    @IsUUID()
    id: string;

    @Length(3, 40)
    name: string;

    @IsBoolean()
    isActive: boolean;

    @IsDate()
    birthday: Date;

    @IsEmail()
    email: string;

    constructor(Id: string | null, name: string, birthday: Date, email: string, isActive: boolean, createdAt?: Date, updatedAt?: Date) {
        super(createdAt);
        this.id = Id == null ? Guid.create().toString() : Id;
        this.name = name?.toLocaleUpperCase().trim();
        this.birthday = birthday;
        this.email = email?.toLocaleLowerCase().trim();
        this.isActive = isActive;
        this.updatedAt = updatedAt;
    }

    public GetBirthdayToString(): String {
        return moment(this.birthday).format();
    }

    public GetClientConvertToPrimitive() {
        return {
            id: this.id,
            name: this.name,
            birthday: this.GetBirthdayToString(),
            email: this.email,
            isActive: this.isActive,
            createdAt: this.GetCreatedAtToString(),
            updatedAt: this.GetUpdatedAtToString()
        }
    }

    public Validate(): INotificationResponse {
        let response = validateSync(this);

        if (response.length > 0) return new Notifications(false, response);

        return new Notifications(true, null);
    }



}
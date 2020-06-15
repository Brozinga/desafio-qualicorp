import moment from 'moment';
export default class BaseEntity {

    createdAt: Date;
    updatedAt?: Date;

    constructor(createdAt?: Date) {
        this.createdAt = createdAt == null ? new Date() : createdAt;
    }

    public SetUpdatedAt() {
        this.updatedAt = new Date();
    }

    public GetCreatedAtToString(): string {
        return moment(this.createdAt).format();
    }

    public GetUpdatedAtToString(): string | null {
        if (this.updatedAt != null || this.updatedAt != undefined)
            return moment(this.updatedAt).format();

        return null;
    }

}
export enum EStatus {
    active = 'active',
    disabled = 'disabled',
    banned = 'banned',
}

export enum ERoles {
    admin = 'admin',
    tenant = 'tenant',
    user = 'user',
}

export enum EPaymentStatus {
    validated = 'validated',
    danied = 'denied',
    pending = 'pending',
}

export enum EPaymentMethod {
    cash = 'cash',
    transfer = 'transfer',
}

export enum EReserve {
    reserved = 'reserved',
    canceled = 'canceled',
}

export enum EType {
    events = 'events',
    entrance = 'entrance',
    exits = 'exits',
}

export enum EStatusNot {
    active = 'active',
    inactive = 'inactive'
}


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class CreateDonationInput {
    count: number;
    displayName: string;
    email: string;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    message?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export class UpdateDonationInput {
    id: number;
}

export class Donation {
    id: number;
    count: number;
    displayName: string;
    email: string;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    message?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    aggregate?: Nullable<number>;
}

export class Aggregate {
    count?: Nullable<number>;
}

export abstract class IQuery {
    abstract donations(orderBy?: Nullable<OrderByParams>, skip?: Nullable<number>, take?: Nullable<number>): Nullable<Donation>[] | Promise<Nullable<Donation>[]>;

    abstract donation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;

    abstract donation_aggregate(): Nullable<Aggregate> | Promise<Nullable<Aggregate>>;
}

export abstract class IMutation {
    abstract createDonation(createDonationInput: CreateDonationInput): Donation | Promise<Donation>;
}

export type DateTime = any;
type Nullable<T> = T | null;

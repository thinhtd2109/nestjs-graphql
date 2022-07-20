import { IsEmail, MinLength } from 'class-validator';

export class DonationCreateInput {
    count: number
    createdAt?: Date
    @MinLength(3)
    displayName: string
    @IsEmail()
    email: string
    mobile?: string
    message?: string
    team?: string
  } 
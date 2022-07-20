import { DonationCreateInput } from './create-donation.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDonationInput extends PartialType(DonationCreateInput) {
  id: number;
}

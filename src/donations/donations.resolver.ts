import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DonationsService } from './donations.service';
import { DonationCreateInput } from './dto/create-donation.input';
import { UpdateDonationInput } from './dto/update-donation.input';

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  create(@Args('createDonationInput') createDonationInput: DonationCreateInput) {
    return this.donationsService.create(createDonationInput);
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy: { field: string; direction: string; }, @Args('skip') skip, @Args('take') take) {
    return this.donationsService.findAll(orderBy, skip, take)
  }

  @Query('donation') 
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne({ id });
  }

  @Query('donation_aggregate')
  aggregate() {
    return this.donationsService.aggregate();
  }

}

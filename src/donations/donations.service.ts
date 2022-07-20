import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private prismaService: PrismaService) {}
  create(createDonationInput: Prisma.DonationCreateInput) {
    return this.prismaService.donation.create({
      data: createDonationInput
    })
  }

  findAll(orderBy?: { field?: string; direction?: string }, skip: number = 0, take: number = 10) {
    const { field = 'createdAt', direction = 'desc' } = orderBy;
    return this.prismaService.donation.findMany({
      orderBy: { [field]: direction },
      skip,
      take
    }); 
  }

  findOne(DonationWhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prismaService.donation.findUnique({ where: DonationWhereUniqueInput })
  }

  // filter same findAll to pagination
  async aggregate() {
    let result = {};
    result['count'] = await this.prismaService.donation.count()
    return result;
  }

}
    
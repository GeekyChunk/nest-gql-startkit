import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prismaService.user.create({
      data: createUserInput
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findByUsername(username: string) {
    return this.prismaService.user.findUnique({
      where: {
        username
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prismaService.user.update({
      where: {
        id
      },
      data: updateUserInput
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: {
        id
      }
    });
  }
}

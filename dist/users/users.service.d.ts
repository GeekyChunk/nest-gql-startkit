import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createUserInput: CreateUserInput): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    findByUsername(username: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    update(id: number, updateUserInput: UpdateUserInput): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}

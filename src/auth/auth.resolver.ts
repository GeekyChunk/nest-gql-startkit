import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { CurrentUser } from './decorators/current.decorator';
import { GqlAuthGuard } from './guards/gql-auth.guard';


@Resolver()
export class AuthResolver {
    @UseGuards(GqlAuthGuard)
    @Query(() => User)
    profile(@CurrentUser() user: User) {
        return user;
    }
}

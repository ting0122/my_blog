import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    createUser(@Body() userDate: User){
        return this.userService.createUser(userDate);
    }

    @Get()
    findAllUsers(){
        return this.userService.findAllUsers();
    }

    @Get(':id')
    findUserById(@Param('id') id: number){
        return this.userService.findUserById(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: number,@Body() userData: User){
        return this.userService.updateUser(id, userData);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number){
        return this.userService.deleteUser(id);
    }

}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    async createUser(user: User): Promise<User> {
        return this.usersRepository.save(user);
    }

    async findAllUsers(): Promise<User[]>{
        return this.usersRepository.find();
    }

    async findUserById(id: number): Promise<User | undefined>{
        return this.usersRepository.findOneBy({id});
    }

    async updateUser(id: number, userData: User): Promise<User | undefined>{
        await this.usersRepository.update(id, userData);
        return this.findUserById(id);
    }

    async deleteUser(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }


}

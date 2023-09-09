import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly users: any[]=[];

    createUser(userData: any){
        const newUser = {id: Date.now(), ...userData};
        this.users.push(newUser);
        return newUser;
    }

    findAllUsers(){
        return this.users;
    }

    findUserById(id: string){
        return this.users.find(user => user.id===+id);
    }

    updateUser(id: string, userData: any){
        const userIndex = this.users.findIndex(user => user.id===+id);
        if(userIndex >= 0){
            this.users[userIndex]={...this.users[userIndex], ...userData};
            return this.users[userIndex];
        }
        return null;
    }

    deleteUser(id: string){
        const userIndex = this.users.findIndex(user => user.id===+id);
        if(userIndex >= 0){
            const deleteUser = this.users.slice(userIndex, 1);
            return deleteUser[0];
        }
        return null;
    }


}

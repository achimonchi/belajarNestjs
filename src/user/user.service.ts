import { Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    findAll(){
        return this.userRepository.find();
    }

    findOneByID(id: number){
        return this.userRepository.findOneOrFail(id);
    }

    save(data: CreateUserDto){
        // const user = new User();
        return this.userRepository.save(data);
    }

    update(user: CreateUserDto, id: number){
        return this.userRepository.save({...user, id: Number(id)})
        // return this.userRepository.update(id, user);
    }

    async delete(id: number){
        const user = await this.findOneByID(id);
        if(user)
            return this.userRepository.delete(id);
        return null;
    }
}
import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { EntityNotFoundExceptionFilter } from "./entity-not-found-exception.filter";
import { UserService } from "./user.service";

@Controller('users')
@UseFilters(new EntityNotFoundExceptionFilter)
export class UserController {
    constructor(private readonly userService: UserService){} from

    @Get()
    async findAll() {
        return {
            data: await this.userService.findAll(),
        };
    }

    @Get(':id')
    async findOneByID(@Param('id') id: number){
        return {
            data: await this.userService.findOneByID(id)
        }
    }

    @Post()
    async create(@Body() data: CreateUserDto) {
        return {
            data : await this.userService.save(data)
        }
    }

    @Put(':id')
    async update(@Body() data: CreateUserDto, @Param('id') id: number){
        return {
            data : await this.userService.update(data, id)
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        return {
            data : await this.userService.delete(id)
        }
    }
}
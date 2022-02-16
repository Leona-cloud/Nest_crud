import { Controller, Body, Param, Post, Get, Put, Delete } from '@nestjs/common';
import {UpdateDto} from './dto/update-todo.dto';
import { CreateDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly service: TodoService) {}
    
    @Get()
    async index(){
       return await this .service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string){
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createDto: CreateDto){
        return await this.service.create(createDto)
    }

    @Put(':id')
    async update(@Param('id') id : string, @Body() updateDto: UpdateDto){
        return await this.service.update(id, updateDto)
    }

    @Delete(':id')
    async delet(@Param('id') id: string){
        return await this.service.delete(id)
    }
}


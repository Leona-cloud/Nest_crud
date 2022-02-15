import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument} from './schemas/todo.schema';
import { CreateDto } from './dto/create-todo.dto';
import { UpdateDto } from './dto/update-todo.dto';


@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private readonly model: Model<TodoDocument> ){}

    async findAll(): Promise <Todo[]>{

        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Todo>{

        return await this.model.findById(id).exec();
    }

    async create(createDto: CreateDto): Promise<Todo>{

        return await new this.model({

            ...createDto,
            created_At: Date.now()
        }).save();
    }

    async update(id: string, updateDto: UpdateDto): Promise<Todo>{

        return await this.model.findByIdAndUpdate(id, updateDto).exec();
    }

    async delete(id: string): Promise<Todo>{

        return await this.model.findByIdAndDelete(id).exec();
    }
}

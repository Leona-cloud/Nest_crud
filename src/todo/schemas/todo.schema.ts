import {Schema, SchemaFactory, Prop} from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema({timestamps: true})

export class Todo{
    @Prop({required: true, unique: true})
    title: string;

    @Prop()
    description: string;

}

export type TodoDocument = Todo & Document;
export const TodoSchema = SchemaFactory.createForClass(Todo);


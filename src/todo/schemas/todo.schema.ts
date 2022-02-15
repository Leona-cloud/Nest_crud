import {Schema, SchemaFactory, Prop} from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema()

export class Todo{
    @Prop({required: true, unique: true})
    title: string;

    @Prop()
    description: string;

    @Prop()
    completed_At: Date;

    @Prop()
    deletedAt?: Date;

}

export type TodoDocument = Todo & Document;
export const TodoSchema = SchemaFactory.createForClass(Todo);


/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type TTrainer = {
    user: Types.ObjectId;
    assignedClasses?: Types.ObjectId[];
    name: string;
    password: string;
    email: string;
    contactNo: string;
    gender: 'male' | 'female' | 'other';
};

export interface TrainerModel extends Model<TTrainer> {
    isUserExists(id: string): Promise<TTrainer | null>;
}

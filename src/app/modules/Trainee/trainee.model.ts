import { Schema, model } from 'mongoose';
import { TraineeModel, TTrainee } from './trainee.interface';

const traineeSchema = new Schema<TTrainee, TraineeModel>(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: [true, 'Trainee id is required'],
            unique: true,
            ref: 'Trainee'
        },
        name: {
            type: String,
            required: [true, 'Trainee name is required.']
        },
        gender: {
            type: String,
            enum: {
                values: ['male', 'female', 'other'],
                message: '{VALUE} is not a valid gender.'
            },
            required: [true, 'Gender is required.']
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            unique: true
        },
        contactNo: {
            type: String,
            required: [true, 'Contact number is required.']
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

export const Trainee = model<TTrainee, TraineeModel>('Trainee', traineeSchema);

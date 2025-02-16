import { Schema, model } from 'mongoose';
import { TrainerModel, TTrainer } from './trainer.interface';

const TrainerSchema = new Schema<TTrainer, TrainerModel>(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: [true, 'Trainer id is required'],
            unique: true,
            ref: 'Trainer'
        },

        name: {
            type: String,
            required: [true, 'Trainer name is required.']
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
        },
        assignedClasses: [{ type: Schema.Types.ObjectId, ref: 'ClassSchedule' }]
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }
);

export const Trainer = model<TTrainer, TrainerModel>('Trainer', TrainerSchema);

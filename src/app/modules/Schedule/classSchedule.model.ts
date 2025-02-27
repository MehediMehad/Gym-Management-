import mongoose, { Schema } from 'mongoose';
import { TClassSchedule } from './classSchedule.interface';
const ClassScheduleSchema: mongoose.Schema = new Schema(
    {
        date: { type: String, required: true }, // e.g., "20-02-2025"
        startTime: { type: String, required: true }, // e.g., "10:00"
        endTime: { type: String, required: true }, // e.g., "12:00"
        trainerId: {
            type: Schema.Types.ObjectId,
            ref: 'Trainer',
            required: true
        },
        capacity: {
            type: Number,
            required: true,
            min: 1, // Minimum 1 trainee required
            max: 10 // Maximum 10 trainees allowed
        },
        trainees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trainee' }]
    },
    { timestamps: true }
);

const ClassSchedule = mongoose.model<TClassSchedule>(
    'ClassSchedule',
    ClassScheduleSchema
);
export default ClassSchedule;

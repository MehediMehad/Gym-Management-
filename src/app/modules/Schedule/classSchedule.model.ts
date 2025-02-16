import mongoose, { Schema } from 'mongoose';
import { TClassSchedule } from './classSchedule.interface';

const ClassScheduleSchema: mongoose.Schema = new Schema(
    {
        date: { type: String, required: true }, // e.g., "2025-02-16"
        startTime: { type: String, required: true }, // e.g., "10:00 AM"
        endTime: { type: String, required: true }, // e.g., "12:00 PM"
        trainerId: {
            type: Schema.Types.ObjectId,
            ref: 'Trainer',
            required: true
        },
        trainees: [{ type: Schema.Types.ObjectId, ref: 'Trainee' }] // Max 10 trainees
    },
    { timestamps: true }
);

const ClassSchedule = mongoose.model<TClassSchedule>(
    'ClassSchedule',
    ClassScheduleSchema
);
export default ClassSchedule;

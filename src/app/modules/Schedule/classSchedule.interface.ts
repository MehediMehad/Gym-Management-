import { Types } from 'mongoose';

export type TClassSchedule = {
    date: string;
    startTime: string;
    endTime: string;
    trainerId: Types.ObjectId;
    trainees: Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
};

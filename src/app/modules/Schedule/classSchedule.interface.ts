import { Types } from 'mongoose';

export type TClassSchedule = {
    date: string;
    startTime: string;
    endTime: string;
    trainerId: Types.ObjectId;
    capacity: number;
    createdAt: Date;
    updatedAt: Date;
    trainees: Types.ObjectId[];
};

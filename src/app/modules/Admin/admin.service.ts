import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TClassSchedule } from '../Schedule/classSchedule.interface';
import ClassSchedule from '../Schedule/classSchedule.model';

const createClassScheduleIntoDB = async (payload: TClassSchedule) => {
    const { date, startTime, endTime, trainerId } = payload;

    // Check if there's already 5 classes scheduled for the same date
    const existingScheduleCount = await ClassSchedule.countDocuments({
        date,
        trainerId
    });

    if (existingScheduleCount >= 5) {
        throw new AppError(
            StatusCodes.BAD_REQUEST,
            'You can only schedule up to 5 classes per day.'
        );
    }

    // Check if there's already a class scheduled for the same date and time
    const existingSchedule = await ClassSchedule.findOne({
        date,
        startTime,
        endTime,
        trainerId
    });

    if (existingSchedule) {
        throw new AppError(
            StatusCodes.CONFLICT,
            'Class schedule already exists for this time and trainer.'
        );
    }

    // Create the class schedule
    const newClassSchedule = await ClassSchedule.create(payload);

    return newClassSchedule;
};

export const AdminServices = {
    createClassScheduleIntoDB
};

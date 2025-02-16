import { StatusCodes } from 'http-status-codes';
import { TClassSchedule } from '../Schedule/classSchedule.interface';
import AppError from '../../errors/AppError';
import ClassSchedule from '../Schedule/classSchedule.model';
import { Trainer } from '../Trainer/trainer.model';

const createClassScheduleIntoDB = async (payload: TClassSchedule) => {
    const { date, startTime, trainerId } = payload;

    // Check if the trainer already has 5 classes scheduled on this date
    const existingScheduleCount = await ClassSchedule.countDocuments({
        date,
        trainerId
    });

    if (existingScheduleCount >= 5) {
        throw new AppError(
            StatusCodes.BAD_REQUEST,
            'A trainer can schedule up to 5 classes per day.'
        );
    }

    // Check if the trainer has another class at the same time
    const existingSchedule = await ClassSchedule.findOne({
        date,
        startTime,
        trainerId
    });

    if (existingSchedule) {
        throw new AppError(
            StatusCodes.CONFLICT,
            'The trainer already has a class at this time.'
        );
    }

    // Create the class schedule
    const newClassSchedule = await ClassSchedule.create(payload);

    // Update Trainer's assignedClasses field
    await Trainer.findByIdAndUpdate(trainerId, {
        $push: { assignedClasses: newClassSchedule._id }
    });

    return newClassSchedule;
};

export const AdminServices = {
    createClassScheduleIntoDB
};

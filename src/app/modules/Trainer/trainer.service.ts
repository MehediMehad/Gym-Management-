import { StatusCodes } from 'http-status-codes';
import { Trainer } from './trainer.model';
import AppError from '../../errors/AppError';

const getAllTrainerFromDB = async (query: Record<string, unknown>) => {
    const result = await Trainer.find(query); 
    return { result };
};

const getMySchedules = async (userEmail: string) => {
    const trainer = await Trainer.findOne({ email: userEmail }).populate({
        path: 'assignedClasses',
        populate: { path: 'trainerId', select: 'name email' }
    });

    if (!trainer) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Trainer not found.');
    }
    
    if (!trainer.assignedClasses || trainer.assignedClasses.length === 0) {
        throw new AppError(StatusCodes.NOT_FOUND, 'You have no assigned classes.');
    }

    return trainer.assignedClasses;
};

export const TrainerServices = {
    getMySchedules,
    getAllTrainerFromDB
};

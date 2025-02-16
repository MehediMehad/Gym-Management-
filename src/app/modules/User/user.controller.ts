import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';

const createTrainee: RequestHandler = catchAsync(async (req, res) => {
    const traineeData = req.body;

    const result = await UserServices.createTraineeIntoDB(traineeData);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Trainee is created successfully!',
        data: result
    });
});
const createTrainer: RequestHandler = catchAsync(async (req, res) => {
    const trainerData = req.body;

    const result = await UserServices.createTrainerIntoDB(trainerData);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Trainer is created successfully!',
        data: result
    });
});

export const UserControllers = {
    createTrainee,
    createTrainer
};

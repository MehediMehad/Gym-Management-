import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TrainerServices } from './trainer.service';

const getAllTrainer = catchAsync(async (req, res) => {
    const result = await TrainerServices.getAllTrainerFromDB(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'All Trainer retrieved successfully',
        data: result.result
    });
});
const getMySchedules = catchAsync(async (req, res) => {
    const { userEmail } = req.user;

    const result = await TrainerServices.getMySchedules(userEmail);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: `Schedules is retrieved successfully.`,
        data: result
    });
});

export const TrainerControllers = {
    getMySchedules,
    getAllTrainer
};

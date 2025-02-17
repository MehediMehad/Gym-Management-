import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { ScheduleServices } from './classSchedule.service';

const getAllSchedule = catchAsync(async (req, res) => {
    const result = await ScheduleServices.getAllSchedulesFromDB(req.query);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'All schedules retrieved successfully',
        data: result.result
    });
});

export const ScheduleController = {
    getAllSchedule,
};


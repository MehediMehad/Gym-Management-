import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { AdminServices } from './admin.service';

const createClassSchedule = catchAsync(async (req, res) => {
    const result = await AdminServices.createClassScheduleIntoDB(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Schedule created successfully',
        data: result
    });
});

export const AdminControllers = {
    createClassSchedule
};

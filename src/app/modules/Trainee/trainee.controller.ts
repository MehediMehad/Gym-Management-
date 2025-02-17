import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { TraineeServices } from './trainee.service';

const bookClassSchedule = catchAsync(async (req, res) => {
    const { userId } = req.user; // Authenticated user ID
    const { classScheduleId } = req.body;

    const result = await TraineeServices.bookClassSchedule(
        userId,
        classScheduleId
    );

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Class booked successfully',
        data: result
    });
});

const cancelBooking = catchAsync(async (req, res) => {
    const { classScheduleId } = req.body;
    const { userId } = req.user; // Authenticated user ID

    const result = await TraineeServices.cancelBooking(userId, classScheduleId);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Booking canceled successfully',
        data: result
    });
});

export const TraineeControllers = {
    bookClassSchedule,
    cancelBooking
};

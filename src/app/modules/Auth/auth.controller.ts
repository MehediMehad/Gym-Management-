import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const registerUser = catchAsync(async (req, res) => {
    const result = await AuthServices.registerUserIntoDB(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'User registered successfully',
        data: result
    });
});

const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req?.body);

    sendResponse(res, {
        success: true,
        message: 'Login successfully',
        statusCode: StatusCodes.OK,
        data: result
    });
});

export const AuthControllers = {
    registerUser,
    loginUser
};

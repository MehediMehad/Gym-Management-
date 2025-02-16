import { StatusCodes } from 'http-status-codes';
import { TUser } from '../User/user.interface';
import { User } from '../User/user.model';
import AppError from '../../errors/AppError';
import { TLoginUser } from './auth.interface';
import config from '../../config';
import jwt from 'jsonwebtoken';

const registerUserIntoDB = async (payload: TUser) => {
    if (payload.role === 'admin') {
        throw new AppError(
            StatusCodes.UNAUTHORIZED,
            'Only Super Admin can create an Admin account.'
        );
    } else if (payload.role === 'trainer') {
        throw new AppError(
            StatusCodes.UNAUTHORIZED,
            'Only Admin can create a Trainer account.'
        );
    }

    const user = await User.create(payload);

    const result = await User.findById(user._id)
        .select('_id name email isBlocked role')
        .lean();
    return result;
};
const loginUser = async (payload: TLoginUser) => {
    const user = await User.isUserExistsByEmail(payload?.email);

    // checking if the user is exist
    if (!user) {
        throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found');
    }
    // checking if the user is Blocked
    await User.isUserBlocked(user.isBlocked);

    if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
        throw new AppError(StatusCodes.FORBIDDEN, 'Password do not matched!');
    }

    // create token and send to the client
    const jwtPayload = {
        userEmail: user.email,
        role: user.role
    };

    const accessToken = jwt.sign(
        jwtPayload,
        config.jwt_access_secret as string,
        {
            expiresIn: '30d'
        }
    );

    return { token: accessToken };
};

export const AuthServices = {
    registerUserIntoDB,
    loginUser
};

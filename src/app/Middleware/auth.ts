/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/User/user.interface';
import { User } from '../modules/User/user.model';

export interface CustomRequest extends Request {
    user: JwtPayload;
}
const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            const token = req.headers.authorization?.split(' ')[1];
            // if the token is sent from the client
            if (!token) {
                throw new AppError(
                    StatusCodes.UNAUTHORIZED,
                    'You are not authorized!'
                );
            }
            // checking if the given token is valid
            let decoded;

            try {
                decoded = jwt.verify(
                    token,
                    config.jwt_access_secret as string
                ) as JwtPayload;
            } catch (err) {
                throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized');
            }

            const { role, userEmail, iat } = decoded;

            const user = await User.findOne({ email: userEmail });

            if (!user) {
                throw new AppError(
                    StatusCodes.NOT_FOUND,
                    'The user is not found'
                );
            }

            if (requiredRoles && !requiredRoles.includes(role)) {
                throw new AppError(
                    StatusCodes.UNAUTHORIZED,
                    'You are not authorized!'
                );
            }
            req.user = decoded as JwtPayload;
            console.log('Decoded Token:', decoded);
            next();
        }
    );
};

export default auth;

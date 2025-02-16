/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { USER_ROLE } from './user.constant';

type TRole = 'admin' | 'trainer' | 'trainee';

export interface TUser {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    role: TRole;
    isBlocked: boolean;
}

export type TUserRole = keyof typeof USER_ROLE;

export interface UserModel extends Model<TUser> {
    //instance methods for checking if the user exist
    isUserExistsByEmail(email: string): Promise<TUser>;
    isPasswordMatched(
        plainTextPassword: string,
        hashedPassword: string
    ): Promise<boolean>;
    isUserBlocked(isBlocked: boolean): Promise<boolean>;
}

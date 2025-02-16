/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { TUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { TTrainee } from '../Trainee/trainee.interface';
import { Trainee } from '../Trainee/trainee.model';
import { Trainer } from '../Trainer/trainer.model';
import { TTrainer } from '../Trainer/trainer.interface';

const createTraineeIntoDB = async (payload: TTrainee) => {
    const userData: Partial<TUser> = {};
    //set Trainee Info
    userData.role = 'trainee';
    userData.email = payload.email;
    userData.name = payload.name;
    userData.password = payload.password;

    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        // create a user (transaction-1)
        const newUser = await User.create([userData], { session });

        //create a Trainee
        if (!newUser.length) {
            throw new AppError(
                StatusCodes.BAD_REQUEST,
                'Failed to create user'
            );
        }

        // set id , _id as user
        payload.user = newUser[0]._id; //reference _id

        // create a Trainee (transaction-2)
        const newTrainee = await Trainee.create([payload], { session });

        if (!newTrainee.length) {
            throw new AppError(
                StatusCodes.BAD_REQUEST,
                'Failed to create Trainee'
            );
        }

        await session.commitTransaction();
        await session.endSession();

        return newTrainee;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};
const createTrainerIntoDB = async (payload: TTrainer) => {
    const userData: Partial<TUser> = {};
    //set Trainer Info
    userData.role = 'trainer';
    userData.email = payload.email;
    userData.name = payload.name;
    userData.password = payload.password;

    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        // create a user (transaction-1)
        const newUser = await User.create([userData], { session });

        //create a Trainer
        if (!newUser.length) {
            throw new AppError(
                StatusCodes.BAD_REQUEST,
                'Failed to create user'
            );
        }

        // set id , _id as user
        payload.user = newUser[0]._id; //reference _id

        // create a Trainer (transaction-2)
        const newTrainer = await Trainer.create([payload], { session });

        if (!newTrainer.length) {
            throw new AppError(
                StatusCodes.BAD_REQUEST,
                'Failed to create Trainer'
            );
        }

        await session.commitTransaction();
        await session.endSession();

        return newTrainer;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};

export const UserServices = {
    createTraineeIntoDB,
    createTrainerIntoDB
};

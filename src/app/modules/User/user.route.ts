import express from 'express';
import validateRequest from '../../Middleware/validateRequest';
import { TraineeValidations } from '../Trainee/trainee.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
    '/crete-trainee',
    validateRequest(TraineeValidations.createsTraineeValidationSchema),
    UserControllers.createTrainee
);

export const UserRouter = router;

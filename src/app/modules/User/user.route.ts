import express from 'express';
import validateRequest from '../../Middleware/validateRequest';
import { TraineeValidations } from '../Trainee/trainee.validation';
import { UserControllers } from './user.controller';
import { TrainerValidations } from '../Trainer/trainer.validation';
import auth from '../../Middleware/auth';

const router = express.Router();

router.post(
    '/crete-trainee',
    validateRequest(TraineeValidations.createsTraineeValidationSchema),
    UserControllers.createTrainee
);
router.post(
    '/crete-trainer',
    auth('admin'),
    validateRequest(TrainerValidations.createsTrainerValidationSchema),
    UserControllers.createTrainer
);

export const UserRouter = router;

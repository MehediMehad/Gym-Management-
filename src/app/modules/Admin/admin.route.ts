import express from 'express';
import validateRequest from '../../Middleware/validateRequest';
import { ClassScheduleValidations } from '../Schedule/classSchedule.validation';
import { AdminControllers } from './admin.controller';
import auth from '../../Middleware/auth';

const router = express.Router();

router.post(
    '/create-schedule',
    auth('admin'),
    validateRequest(
        ClassScheduleValidations.createClassScheduleValidationSchema
    ),
    AdminControllers.createClassSchedule
);

export const AdminRouter = router;

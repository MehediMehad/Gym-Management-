import express from 'express';
import validateRequest from '../../Middleware/validateRequest';
import { ClassScheduleValidations } from '../Schedule/classSchedule.validation';
import { AdminControllers } from './admin.controller';

const router = express.Router();

router.post(
    '/create-schedule',
    validateRequest(
        ClassScheduleValidations.createClassScheduleValidationSchema
    ),
    AdminControllers.createClassSchedule
);

export const AdminRouter = router;

import express from 'express';
import { ScheduleController } from './classSchedule.controller';
import auth from '../../Middleware/auth';

const router = express.Router();

router.get('/', auth("admin"), ScheduleController.getAllSchedule);


export const ScheduleRouter = router;
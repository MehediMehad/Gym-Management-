import express from 'express';
import auth from '../../Middleware/auth';
import { TrainerControllers } from '../Trainer/trainer.controller';

const router = express.Router();

router.get('/my-schedules', auth('trainer'), TrainerControllers.getMySchedules);

export const TrainerRouter = router;

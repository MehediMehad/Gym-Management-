import express from 'express';
import auth from '../../Middleware/auth';
import { TrainerControllers } from '../Trainer/trainer.controller';

const router = express.Router();

router.get('/my-schedules', auth('trainer'), TrainerControllers.getMySchedules);
router.get('/', auth('admin'), TrainerControllers.getAllTrainer);


export const TrainerRouter = router;

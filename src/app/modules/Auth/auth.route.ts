import express from 'express';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../Middleware/validateRequest';
import { AuthValidations } from './auth.validation';

const router = express.Router();

router.post(
    '/login',
    validateRequest(AuthValidations.loginValidationSchema),
    AuthControllers.loginUser
);

export const AuthRouter = router;

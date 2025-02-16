import { Router } from 'express';
import { AuthRouter } from '../modules/Auth/auth.route';

const router = Router();

const modulesRouter = [
    {
        path: '/auth',
        route: AuthRouter
    }
];

modulesRouter.forEach(route => router.use(route.path, route.route));

export default router;

import { Router } from 'express';
import { AuthRouter } from '../modules/Auth/auth.route';
import { UserRouter } from '../modules/User/user.route';
import { AdminRouter } from '../modules/Admin/admin.route';
import { TrainerRouter } from '../modules/Trainer/trainer.route';

const router = Router();

const modulesRouter = [
    {
        path: '/auth',
        route: AuthRouter
    },
    {
        path: '/user',
        route: UserRouter
    },
    {
        path: '/admin',
        route: AdminRouter
    },
    {
        path: '/trainer',
        route: TrainerRouter
    }
];

modulesRouter.forEach(route => router.use(route.path, route.route));

export default router;

import { TUserRole } from './user.interface';

export const USER_ROLE = {
    admin: 'admin',
    trainer: 'trainer',
    trainee: 'trainee'
} as const;

export const UserRole: TUserRole[] = ['admin', 'trainer', 'trainee'];

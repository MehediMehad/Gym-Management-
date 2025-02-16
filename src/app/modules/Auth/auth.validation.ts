import { z } from 'zod';
import { UserRole } from '../User/user.constant';

const registerValidationSchema = z.object({
    body: z.object({
        name: z
            .string({ required_error: 'Name is required.' })
            .trim()
            .min(3, 'Name must be at least 3 characters long.'),
        email: z
            .string({ required_error: 'Email is required.' })
            .email('Invalid email format.')
            .min(4, 'Email must be at least 4 characters long.'),
        password: z
            .string({ required_error: 'Password is required.' })
            .min(6, 'Password must be at least 6 characters long.'),
        role: z.enum([...UserRole] as [string, ...string[]], {
            errorMap: () => ({
                message: `Invalid Role. Allowed types are: ${UserRole.join(', ')}.`
            })
        }),
        isBlocked: z.boolean().default(false)
    })
});

const loginValidationSchema = z.object({
    body: z.object({
        email: z.string({ required_error: 'Email is required.' }),
        password: z.string({ required_error: 'Password is required' })
    })
});

export const AuthValidations = {
    registerValidationSchema,
    loginValidationSchema
};

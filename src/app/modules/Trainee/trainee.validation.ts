import { z } from 'zod';

export const createsTraineeValidationSchema = z.object({
    body: z.object({
        // user: z.string({ required_error: 'Trainee ID is required.' }),
        name: z.string({ required_error: 'Trainee name is required.' }),
        gender: z.enum(['male', 'female', 'other'], {
            errorMap: () => ({
                message: 'Gender must be male, female, or other.'
            })
        }),
        email: z
            .string({ required_error: 'Email is required.' })
            .email('Invalid email format.'),
        contactNo: z.string({ required_error: 'Contact number is required.' })
    })
});

export const bookClassScheduleValidationSchema = z.object({
    body: z.object({
        classScheduleId: z.string({
            required_error: 'classScheduleId ID is required.'
        })
    })
});

export const TraineeValidations = {
    createsTraineeValidationSchema,
    bookClassScheduleValidationSchema
};

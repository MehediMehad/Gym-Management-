import { z } from 'zod';

export const createsTrainerValidationSchema = z.object({
    body: z.object({
        // user: z.string({ required_error: 'Trainer ID is required.' }),
        name: z.string({ required_error: 'Trainer name is required.' }),
        gender: z.enum(['male', 'female', 'other'], {
            errorMap: () => ({
                message: 'Gender must be male, female, or other.'
            })
        }),
        email: z
            .string({ required_error: 'Email is required.' })
            .email('Invalid email format.'),
        contactNo: z.string({ required_error: 'Contact number is required.' }),
        assignedClasses: z.array(z.string()).optional() // Added assignedClasses validation
    })
});

export const TrainerValidations = {
    createsTrainerValidationSchema
};

import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('Digite um e-mail válido').toLowerCase(),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

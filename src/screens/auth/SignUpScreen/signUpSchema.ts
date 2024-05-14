import {stringUtils} from '@utils';
import {z} from 'zod';

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z
    .string()
    .min(5, 'Username muito curto.')
    .regex(usernameRegex, 'Digite um username válido'),
  firstName: z
    .string()
    .min(2, 'Digite um nome válido.')
    .max(50, 'Nome muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  lastName: z
    .string()
    .min(2, 'Digite um nome válido.')
    .max(50, 'Nome muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.string().email('Digite um e-mail válido').toLowerCase(),
  password: z.string().min(8, 'Digite uma senha válida'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

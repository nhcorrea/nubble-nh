import {z} from 'zod';

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(usernameRegex, 'Digite um username válido'),
  name: z
    .string()
    .min(2, 'Digite um nome válido.')
    .max(50, 'Nome muito longo')
    .transform(value => {
      return value
        .split(' ')
        .map(
          name =>
            name.charAt(0).toLocaleUpperCase() +
            name.slice(1).toLocaleLowerCase(),
        )
        .join(' ');
    }),
  email: z.string().email('Digite um e-mail válido').toLowerCase(),
  password: z.string().min(8, 'Digite uma senha válida'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

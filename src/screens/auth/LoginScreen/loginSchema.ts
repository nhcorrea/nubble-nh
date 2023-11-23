import {z} from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Digite um e-mail válido').toLowerCase(),
  password: z.string().min(8, 'Digite uma senha válida'),
})

export type LoginSchema = z.infer<typeof loginSchema>

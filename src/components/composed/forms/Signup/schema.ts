import { z } from 'zod'

export const messages = {
  nameRequired: 'Username is required',
  emailRequired: 'Email is required',
  emailInvalid: 'Must be a valid email',
  passwordRequired: 'Must have 8 characters',
  confirmPasswordRequired: 'Confirm your password',
  confirmPasswordInvalid: "Passwords don't match",
  termsRequired: 'You must accept the terms of use',
}

export const registerFormSchema = z
  .object({
    username: z.string().min(1, { message: messages.nameRequired }),
    email: z.string().min(1, { message: messages.emailRequired }).email({
      message: messages.emailInvalid,
    }),
    password: z.string().min(8, { message: messages.passwordRequired }),
    confirmPassword: z
      .string()
      .min(1, { message: messages.confirmPasswordRequired }),
    terms: z.literal(true, {
      errorMap: () => ({ message: messages.termsRequired }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: messages.confirmPasswordInvalid,
  })

export type RegisterFormData = z.infer<typeof registerFormSchema>

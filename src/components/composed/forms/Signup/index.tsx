import { SubmitHandler } from 'react-hook-form'

import { Button } from '@/components/primitives/buttons/Button'

import { css } from '@/styled-system/css'
import { RegisterFormData, registerFormSchema } from './schema'
import { Mail, User } from 'lucide-react'
import { useForm } from '@/hooks/useForm'
import { FormInput } from '@/components/primitives/forms/Input/FormInput'
import { FormPasswordInput } from '@/components/primitives/forms/PasswordInput/FormPasswordInput'
import { FormCheckbox } from '@/components/primitives/forms/Checkbox/FormCheckbox'

export const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    schema: registerFormSchema,
  })

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => console.log(data)

  return (
    <form
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: '4',
        bg: 'bg.surface',
        p: '8',
        rounded: 'lg',
        shadow: 'lg',
      })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        errorMessage={errors.username?.message}
        {...register('username')}
        icon={<User size={16} />}
        placeholder="JoeDoe"
        label="Username"
        isRequired
      />

      <FormInput
        errorMessage={errors.email?.message}
        {...register('email')}
        icon={<Mail size={16} />}
        placeholder="joedoe@gmail.com"
        label="E-mail"
        isRequired
      />

      <FormPasswordInput
        errorMessage={errors.password?.password?.message}
        {...register('password.password', {
          deps: ['password.confirmPassword'],
        })}
        label="Password"
        isRequired
      />

      <FormPasswordInput
        errorMessage={errors.password?.confirmPassword?.message}
        {...register('password.confirmPassword')}
        label="Confirm password"
        isRequired
      />

      <FormCheckbox
        checkboxLabel="I've read and agree with the terms of use"
        label="Terms of use"
        name="terms"
        control={control}
        errorMessage={errors?.terms?.message}
        isRequired
      />

      <Button type="submit" disabled={isSubmitting} full>
        Sign up
      </Button>
    </form>
  )
}

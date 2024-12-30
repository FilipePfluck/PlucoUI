import { FormProvider, SubmitHandler } from 'react-hook-form'

import { Button } from '@/components/primitives/forms/buttons/Button'

import { css } from '@/styled-system/css'
import { RegisterFormData, registerFormSchema } from './schema'
import { Mail, User } from 'lucide-react'
import { useForm } from '@/hooks/useForm'
import { FormInput } from '@/components/primitives/forms/inputs/Input/FormInput'
import { FormPasswordInput } from '@/components/primitives/forms/inputs/PasswordInput/FormPasswordInput'
import { FormCheckbox } from '@/components/primitives/forms/Checkbox/FormCheckbox'

export type SignupProps = {
  onSubmit: SubmitHandler<RegisterFormData>
}

export const Signup = ({ onSubmit }: SignupProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, ...formState },
    ...rest
  } = useForm<RegisterFormData>({
    schema: registerFormSchema,
  })

  return (
    <FormProvider
      register={register}
      handleSubmit={handleSubmit}
      control={control}
      formState={{ errors, isSubmitting, ...formState }}
      {...rest}
    >
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
          startElement={<User size={16} />}
          placeholder="JoeDoe"
          label="Username"
          isRequired
        />

        <FormInput
          errorMessage={errors.email?.message}
          {...register('email')}
          startElement={<Mail size={16} />}
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
          // role="textbox"
        />

        <FormPasswordInput
          errorMessage={errors.password?.confirmPassword?.message}
          {...register('password.confirmPassword')}
          label="Confirm password"
          isRequired
          // role="textbox"
        />

        <FormCheckbox
          checkboxLabel="I've read and agree with the terms of use"
          label="Terms of use"
          control={control}
          errorMessage={errors?.terms?.message}
          isRequired
          {...register('terms')}
        />

        <Button type="submit" disabled={isSubmitting} full>
          Sign up
        </Button>
      </form>
    </FormProvider>
  )
}

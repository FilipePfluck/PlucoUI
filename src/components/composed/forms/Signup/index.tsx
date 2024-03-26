import { Controller, SubmitHandler } from 'react-hook-form'

import { Button } from '@/components/primitives/buttons/Button'
import { FormControl } from '@/components/primitives/forms/FormControl'
import { Input } from '@/components/primitives/forms/Input'

import { css } from '@/styled-system/css'
import { RegisterFormData, registerFormSchema } from './schema'
import { PasswordInput } from '@/components/primitives/forms/PasswordInput'
import { Checkbox } from '@/components/primitives/forms/Checkbox'
import { Mail, User } from 'lucide-react'
import { useForm } from '@/hooks/useForm'

export const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, dirtyFields, touchedFields },
  } = useForm<RegisterFormData>({
    schema: registerFormSchema,
  })

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => console.log(data)

  // TODO - create a custom useForm hook that injects this register

  console.log('AAA', dirtyFields, touchedFields)

  return (
    <form
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: '4',
        bg: 'bg.card',
        p: '8',
        rounded: 'lg',
        shadow: 'lg',
      })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl
        id="username"
        label="Username"
        isRequired
        errorMessage={errors?.username?.message}
      >
        <Input
          placeholder="JoeDoe"
          icon={<User size={16} />}
          {...register('username')}
        />
      </FormControl>

      <FormControl
        id="email"
        label="E-mail"
        isRequired
        errorMessage={errors?.email?.message}
      >
        <Input
          placeholder="joedoe@gmail.com"
          icon={<Mail size={16} />}
          {...register('email')}
        />
      </FormControl>

      <FormControl
        id="password"
        label="Password"
        isRequired
        errorMessage={errors?.password?.password?.message}
      >
        <PasswordInput
          {...register('password.password', {
            deps: ['password.confirmPassword'],
          })}
        />
      </FormControl>

      <FormControl
        id="confirm-password"
        label="Confirm password"
        isRequired
        errorMessage={errors?.password?.confirmPassword?.message}
      >
        <PasswordInput {...register('password.confirmPassword')} />
      </FormControl>

      <Controller
        control={control}
        name="terms"
        render={({ field }) => {
          const { onChange, value, ...rest } = field

          return (
            <FormControl
              id="terms"
              label="Terms of use"
              isRequired
              errorMessage={errors?.terms?.message}
            >
              <Checkbox
                label="I've read and agree with the terms of use"
                onCheckedChange={({ checked }) => onChange(checked)}
                checked={value}
                {...rest}
              />
            </FormControl>
          )
        }}
      />

      <Button type="submit" disabled={isSubmitting} full>
        Sign up
      </Button>
    </form>
  )
}

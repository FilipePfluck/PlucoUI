import { zodResolver } from '@hookform/resolvers/zod'
import {
  ChangeHandler,
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form'

import { Button } from '@/components/primitives/buttons/Button'
import { FormControl } from '@/components/primitives/forms/FormControl'
import { Input } from '@/components/primitives/forms/Input'

import { css } from '@/styled-system/css'
import { RegisterFormData, registerFormSchema } from './schema'
import { PasswordInput } from '@/components/primitives/forms/PasswordInput'
import { Checkbox } from '@/components/primitives/forms/Checkbox'
import { Mail, User } from 'lucide-react'
import { useEffect } from 'react'

export const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<RegisterFormData>({
    mode: 'onBlur',
    resolver: zodResolver(registerFormSchema),
  })

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => console.log(data)

  // TODO - create a custom useForm hook that injects this customRegister

  const customRegister = (registerName: Parameters<typeof register>[0]) => {
    const { name, onChange: onChangeCallback, ...rest } = register(registerName)

    // using any here because nested types are overly complicated
    // eslint-disable-next-line
    function getValueByPath(obj: any, path: string): any {
      const keys = path.split('.')
      // eslint-disable-next-line
      return keys.reduce((accumulator: any, currentKey: string) => {
        return accumulator && accumulator[currentKey] !== undefined
          ? accumulator[currentKey]
          : undefined
      }, obj)
    }

    const onChange: ChangeHandler = (e) => {
      const onChangeReturn = onChangeCallback(e)

      if (getValueByPath(errors, name)) {
        trigger(name)
      }

      return onChangeReturn
    }

    return {
      name,
      onChange,
      ...rest,
    }
  }

  const password = watch('password.password')
  const isConfirmPasswordDirty = dirtyFields.password?.confirmPassword

  useEffect(() => {
    if (isConfirmPasswordDirty) {
      trigger('password.confirmPassword')
    }
  }, [watch, password, trigger, isConfirmPasswordDirty])

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
          {...customRegister('username')}
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
          {...customRegister('email')}
        />
      </FormControl>

      <FormControl
        id="password"
        label="Password"
        isRequired
        errorMessage={errors?.password?.password?.message}
      >
        <PasswordInput {...customRegister('password.password')} />
      </FormControl>

      <FormControl
        id="confirm-password"
        label="Confirm password"
        isRequired
        errorMessage={errors?.password?.confirmPassword?.message}
      >
        <PasswordInput {...customRegister('password.confirmPassword')} />
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

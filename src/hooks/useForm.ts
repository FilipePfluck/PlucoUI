import {
  ChangeHandler,
  FieldPath,
  FieldValues,
  UseFormRegister,
  UseFormReturn,
  useForm as useHookForm,
  UseFormProps as UseHookFormProps,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { getValueByPath } from '@/utils/getValueByPath'

type UseFormProps<F extends FieldValues> = {
  schema: z.ZodSchema
  props?: UseHookFormProps<F>
}

// this useForm implementation will use zod by default
// so I don't need to import zod and zodResolver each time I use this hook

export const useForm = <F extends FieldValues>({
  schema,
  props,
}: UseFormProps<F>): UseFormReturn<F> => {
  const {
    register: hookFormRegister,
    formState,
    trigger,
    ...rest
  } = useHookForm({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    ...props,
  })

  // the goal of this custom onChange implementation is to
  // eagerly reward the user for correcting invalid data
  // (by default the revalidation happens on onBlur.
  // if the field has any errors, I want to revalidate it on change,
  // to remove the error message as soon as the user corrects the data)

  const customRegister: UseFormRegister<F> = (registerName, options) => {
    const {
      name,
      onChange: onChangeCallback,
      ...rest
    } = hookFormRegister(registerName, options)

    const onChange: ChangeHandler = (e) => {
      const onChangeReturn = onChangeCallback(e)

      if (getValueByPath(formState.errors, name)) {
        trigger(name)
      }

      // deps are fields that depend on this field. If any of them have errors,
      // I want to trigger their revalidation as soon as the user fixes this field

      const deps = options?.deps

      if (deps) {
        // deps can either be a string or an array of strings
        if (Array.isArray(deps)) {
          deps.forEach((dep) => {
            if (getValueByPath(formState.errors, dep)) {
              trigger(dep as FieldPath<F>)
            }
          })
        } else {
          if (getValueByPath(formState.errors, deps)) {
            trigger(deps as FieldPath<F>)
          }
        }
      }

      return onChangeReturn
    }

    return {
      name,
      onChange,
      ...rest,
    }
  }

  return {
    register: customRegister,
    formState,
    trigger,
    ...rest,
  }
}

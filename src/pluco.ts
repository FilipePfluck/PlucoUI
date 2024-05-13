import { styled } from '@/styled-system/jsx'
import {
  RecipeRuntimeFn,
  RecipeVariantProps,
  StyledComponent,
} from '@/styled-system/types'
import { RecipeVariantRecord } from '@pandacss/dev'
import { ElementType } from 'react'

type PlucoConfig<T> = Partial<
  Record<keyof T, RecipeRuntimeFn<RecipeVariantRecord>>
>
type ArkComponent = Record<string, ElementType>

type PlucoReturn<A extends ArkComponent, C extends PlucoConfig<A>> = {
  [P in keyof A]: C[P] extends RecipeRuntimeFn<RecipeVariantRecord>
    ? StyledComponent<A[P], RecipeVariantProps<C[P]>>
    : A[P]
}

export const Pluco = <A extends ArkComponent, C extends PlucoConfig<A>>(
  ArkComponent: A,
  config: C,
): PlucoReturn<A, C> => {
  const result = {} as PlucoReturn<A, C>

  Object.keys(ArkComponent).forEach((key) => {
    const componentConfig = config[key as keyof A]
    if (componentConfig) {
      Object.assign(result, {
        [key]: styled(ArkComponent[key], componentConfig),
      })
    } else {
      Object.assign(result, {
        [key]: ArkComponent[key],
      })
    }
  })

  return result
}

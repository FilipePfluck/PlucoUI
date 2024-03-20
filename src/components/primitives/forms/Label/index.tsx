import { ComponentProps } from '@/styled-system/types'
import * as S from './styles'
import { SystemStyleObject } from '@pandacss/dev'

type LabelProps = ComponentProps<'label'> & {
  css?: SystemStyleObject
  isRequired?: boolean
}

export const Label = ({ children, isRequired, ...props }: LabelProps) => {
  return (
    <S.Root>
      <S.Label {...props}>{children}</S.Label>
      {isRequired && <S.RequiredIndicator aria-hidden>*</S.RequiredIndicator>}
    </S.Root>
  )
}

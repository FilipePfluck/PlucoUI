import { StyledElement } from '@/types/withCss'
import { Fragment, ReactNode } from 'react'

import * as S from './styles'
import { SimpleSpread } from '@/types/simpleSpread'
import { cx } from '@/styled-system/css'

export type InputProps = SimpleSpread<
  StyledElement<'input'>,
  {
    size?: 'xs' | 'sm' | 'md' | 'lg'
    full?: boolean
    startElement?: ReactNode
    endElement?: ReactNode
    startAddon?: ReactNode
    endAddon?: ReactNode
  }
>

export const Input = ({
  size,
  full,
  startAddon,
  endAddon,
  startElement,
  endElement,
  className,
  css,
  ...props
}: InputProps) => {
  const OuterContainer =
    startAddon || endAddon ? S.InputOuterContainer : Fragment

  return (
    <OuterContainer
      {...((startAddon || endAddon) && { className: 'input-outer-container' })}
    >
      {startAddon && <S.InputAddon side="start">{startAddon}</S.InputAddon>}
      <S.InputContainer
        size={size}
        full={full}
        className={cx(className, 'group')}
        css={css}
      >
        {startElement && (
          <S.InputAditionalElement>{startElement}</S.InputAditionalElement>
        )}
        <S.Input {...props} />
        {endElement && (
          <S.InputAditionalElement>{endElement}</S.InputAditionalElement>
        )}
      </S.InputContainer>
      {endAddon && <S.InputAddon side="end">{endAddon}</S.InputAddon>}
    </OuterContainer>
  )
}

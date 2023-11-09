import {
  Tooltip as ArkTooltip,
  TooltipProps as ArkTooltipProps,
  Portal,
} from '@ark-ui/react'
import { ReactNode } from 'react'

import * as S from './styles'

type TooltipProps = ArkTooltipProps & {
  message: string
  children: ReactNode
}

export const Tooltip = ({ children, message, ...props }: TooltipProps) => {
  return (
    <ArkTooltip.Root {...props}>
      <ArkTooltip.Trigger>{children}</ArkTooltip.Trigger>
      <Portal>
        <ArkTooltip.Positioner>
          <S.Content>
            <S.Arrow>
              <ArkTooltip.ArrowTip />
            </S.Arrow>
            {message}
          </S.Content>
        </ArkTooltip.Positioner>
      </Portal>
    </ArkTooltip.Root>
  )
}

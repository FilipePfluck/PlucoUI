import {
  Tooltip as ArkTooltip,
  TooltipRootProps as ArkTooltipProps,
  Portal,
} from '@ark-ui/react'
import { ReactNode } from 'react'

import S from './styles'

type TooltipProps = ArkTooltipProps & {
  message: string
  children: ReactNode
}

export const Tooltip = ({
  children,
  openDelay = 300,
  message,
  ...props
}: TooltipProps) => {
  return (
    <ArkTooltip.Root openDelay={openDelay} {...props}>
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

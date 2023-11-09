import {
  HoverCardArrowTip,
  HoverCardContentProps,
  HoverCardPositioner,
  Portal,
} from '@ark-ui/react'
import * as S from './styles'

export const HoverCardContent = ({
  children,
  ...props
}: HoverCardContentProps) => {
  return (
    <Portal>
      <HoverCardPositioner>
        <S.Content {...props}>
          <S.Arrow>
            <HoverCardArrowTip />
          </S.Arrow>
          {children}
        </S.Content>
      </HoverCardPositioner>
    </Portal>
  )
}

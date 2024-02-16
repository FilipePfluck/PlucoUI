import { ReactNode } from 'react'
import {
  MenuProps as ArkMenuProps,
  MenuItemGroupProps as ArkMenuItemGroupProps,
  MenuOptionItemProps as ArkMenuOptionItemProps,
  MenuTriggerItemProps as ArkMenuTriggerItemProps,
  Portal,
} from '@ark-ui/react'

import * as S from './styles'
import { Check, Dot } from 'lucide-react'

export type MenuItemGroupProps = ArkMenuItemGroupProps & {
  id: string
  label?: string
  children?: ReactNode
}

export type MenuOptionItemProps = Omit<ArkMenuOptionItemProps, 'type'> & {
  rightSlot?: ReactNode
}

export type MenuTriggerItemProps = ArkMenuProps & {
  triggerLabel: string
  triggerProps?: ArkMenuTriggerItemProps
  children: ReactNode
  rightSlot?: ReactNode
}

export const MenuItemGroup = ({
  id,
  label,
  children,
  ...props
}: MenuItemGroupProps) => {
  return (
    <S.ItemGroup id={id} {...props}>
      {label && <S.ItemGroupLabel htmlFor={id}>{label}</S.ItemGroupLabel>}
      {children}
    </S.ItemGroup>
  )
}

export const MenuCheckboxItem = ({
  children,
  rightSlot,
  ...props
}: MenuOptionItemProps) => {
  return (
    <S.OptionItem closeOnSelect={false} {...props} type="checkbox">
      {({ isChecked }) => (
        <>
          {isChecked && (
            <S.OptionIndicator>
              <Check size={14} />
            </S.OptionIndicator>
          )}
          {children}
          {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
        </>
      )}
    </S.OptionItem>
  )
}

export const MenuRadioItem = ({
  children,
  rightSlot,
  ...props
}: MenuOptionItemProps) => {
  return (
    <S.OptionItem closeOnSelect={false} {...props} type="radio">
      {({ isChecked }) => (
        <>
          {isChecked && (
            <S.OptionIndicator>
              <Dot />
            </S.OptionIndicator>
          )}
          {children}
          {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
        </>
      )}
    </S.OptionItem>
  )
}

export const MenuTriggerItem = ({
  children,
  triggerLabel,
  triggerProps,
  rightSlot,
  ...props
}: MenuTriggerItemProps) => {
  return (
    <S.Root positioning={{ gutter: 16 }} {...props}>
      <S.TriggerItem {...triggerProps}>
        {triggerLabel} {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
      </S.TriggerItem>
      <Portal>
        <S.Positioner>
          <S.Content>{children}</S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}

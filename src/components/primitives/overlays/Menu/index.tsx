import { ReactNode, useState } from 'react'
import {
  MenuRootProps as ArkMenuProps,
  MenuItemGroupProps as ArkMenuItemGroupProps,
  MenuTriggerItemProps as ArkMenuTriggerItemProps,
  Portal,
  MenuCheckboxItemProps as ArkMenuCheckboxItemProps,
  MenuRadioItemProps as ArkMenuRadioItemProps,
  MenuRadioItemGroupProps as ArkMenuRadioItemGroupProps,
} from '@ark-ui/react'

import S, { OptionIndicator, RightSlot } from './styles'
import { Check, Dot } from 'lucide-react'

export type MenuItemGroupProps = ArkMenuItemGroupProps & {
  id: string
  label?: string
  children?: ReactNode
}

export type MenuCheckboxItemProps = Omit<
  ArkMenuCheckboxItemProps,
  'checked'
> & {
  rightSlot?: ReactNode
  value: string
}

export type MenuRadioItemProps = ArkMenuRadioItemProps & {
  rightSlot?: ReactNode
  value: string
  name: string
}

export type MenuRadioItemGroupProps = Omit<
  ArkMenuRadioItemGroupProps,
  'checked'
> & {
  label?: string
  radioItems: MenuRadioItemProps[]
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
      {label && <S.ItemGroupLabel>{label}</S.ItemGroupLabel>}
      {children}
    </S.ItemGroup>
  )
}

export const MenuCheckboxItem = ({
  children,
  rightSlot,
  value,
  ...props
}: MenuCheckboxItemProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <S.CheckboxItem
      closeOnSelect={false}
      onCheckedChange={setChecked}
      checked={checked}
      value={value}
      {...props}
    >
      {checked && (
        <OptionIndicator>
          <Check size={14} />
        </OptionIndicator>
      )}
      {children}
      {rightSlot && <RightSlot>{rightSlot}</RightSlot>}
    </S.CheckboxItem>
  )
}

export const MenuRadioItemGroup = ({
  children,
  label,
  radioItems,
  ...props
}: MenuRadioItemGroupProps) => {
  const [value, setValue] = useState('React')

  return (
    <S.RadioItemGroup
      {...props}
      value={value}
      onValueChange={(e) => setValue(e.value)}
    >
      {label && <S.ItemGroupLabel>{label}</S.ItemGroupLabel>}
      {radioItems.map(({ name, value, rightSlot }) => (
        <S.RadioItem key={value} value={value}>
          <S.ItemIndicator>
            <Dot />
          </S.ItemIndicator>
          {name}
          {rightSlot && <RightSlot>{rightSlot}</RightSlot>}
        </S.RadioItem>
      ))}
      {children}
    </S.RadioItemGroup>
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
        {triggerLabel} {rightSlot && <RightSlot>{rightSlot}</RightSlot>}
      </S.TriggerItem>
      <Portal>
        <S.Positioner>
          <S.Content>{children}</S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}

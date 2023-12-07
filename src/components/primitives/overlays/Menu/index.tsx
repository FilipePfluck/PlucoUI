import { ReactNode, useState } from 'react'
import {
  Menu as ArkMenu,
  MenuProps as ArkMenuProps,
  MenuItemGroupProps as ArkMenuItemGroupProps,
  MenuOptionItemProps as ArkMenuOptionItemProps,
  MenuTriggerItemProps as ArkMenuTriggerItemProps,
  Portal,
} from '@ark-ui/react'

import { Button } from '../../buttons/Button'
import * as S from './styles'
import { Check, ChevronRight, Dot } from 'lucide-react'

type MenuItemGroupProps = ArkMenuItemGroupProps & {
  id: string
  label?: string
  children?: ReactNode
}

type MenuOptionItemProps = Omit<ArkMenuOptionItemProps, 'type'> & {
  rightSlot?: ReactNode
}

type MenuTriggerItemProps = ArkMenuProps & {
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
    <ArkMenu positioning={{ gutter: 16 }} {...props}>
      <S.TriggerItem {...triggerProps}>
        {triggerLabel} {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
      </S.TriggerItem>
      <Portal>
        <S.Positioner>
          <S.Content>{children}</S.Content>
        </S.Positioner>
      </Portal>
    </ArkMenu>
  )
}

export const Menu = () => {
  const [value, setValue] = useState({
    userSettings: [],
    subscriptionPlan: 'basic',
  })

  const [languages, setLanguages] = useState({
    languages: 'english',
  })

  return (
    <S.Root
      value={value}
      onValueChange={(data) => {
        setValue((prev) => ({
          ...prev,
          [data.name]: data.value,
        }))
      }}
      positioning={{ gutter: 16 }}
    >
      <S.Trigger asChild>
        <Button>Open Menu</Button>
      </S.Trigger>
      <S.Positioner>
        <S.Content>
          <MenuItemGroup id="userSettings" label="User settings">
            <MenuCheckboxItem name="userSettings" value="login">
              Remember Login
            </MenuCheckboxItem>
            <MenuCheckboxItem name="userSettings" value="darkMode">
              Dark Mode
            </MenuCheckboxItem>
            <MenuCheckboxItem name="userSettings" value="notifications">
              Enable Notifications
            </MenuCheckboxItem>
          </MenuItemGroup>
          <S.Separator />

          <MenuItemGroup id="subscriptionPlan" label="Subscription Plan">
            <MenuRadioItem name="subscriptionPlan" value="basic">
              Basic Plan
            </MenuRadioItem>
            <MenuRadioItem name="subscriptionPlan" value="pro">
              Pro Plan
            </MenuRadioItem>
            <MenuRadioItem name="subscriptionPlan" value="enterprise">
              Enterprise Plan
            </MenuRadioItem>
          </MenuItemGroup>
          <S.Separator />

          <MenuItemGroup id="profile" label="Profile Options">
            <S.Item id="editProfile">Edit Profile</S.Item>
            <S.Item id="friendList">Friend List</S.Item>
            <MenuTriggerItem
              triggerLabel="Languages"
              rightSlot={<ChevronRight size={14} />}
              onValueChange={(data) => {
                setLanguages((prev) => ({
                  ...prev,
                  [data.name]: data.value,
                }))
              }}
              value={languages}
            >
              <MenuItemGroup id="languages">
                <MenuRadioItem
                  name="languages"
                  id="english"
                  value="english"
                  rightSlot="🇺🇸"
                >
                  English
                </MenuRadioItem>
                <MenuRadioItem
                  name="languages"
                  id="portuguese"
                  value="portuguese"
                  rightSlot="🇧🇷"
                >
                  Portuguese
                </MenuRadioItem>
                <MenuRadioItem
                  name="languages"
                  id="spanish"
                  value="spanish"
                  rightSlot="🇪🇸"
                >
                  Spanish
                </MenuRadioItem>
                <MenuRadioItem
                  name="languages"
                  id="french"
                  value="french"
                  rightSlot="🇫🇷"
                >
                  French
                </MenuRadioItem>
                <MenuRadioItem
                  name="languages"
                  id="german"
                  value="german"
                  rightSlot="🇩🇪"
                >
                  German
                </MenuRadioItem>
              </MenuItemGroup>
            </MenuTriggerItem>
          </MenuItemGroup>

          <S.Arrow>
            <S.ArrowTip />
          </S.Arrow>
        </S.Content>
      </S.Positioner>
    </S.Root>
  )
}

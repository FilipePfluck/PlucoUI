import { ReactNode, useState } from 'react'
import {
  Menu as ArkMenu,
  MenuItemGroupProps as ArkMenuItemGroupProps,
  MenuOptionItemProps as ArkMenuOptionItemProps,
  Portal,
} from '@ark-ui/react'

import { Button } from '../../buttons/Button'
import * as S from './styles'
import { Check, Dot } from 'lucide-react'

type MenuItemGroupProps = ArkMenuItemGroupProps & {
  id: string
  label?: string
  children?: ReactNode
}

type MenuOptionItemProps = Omit<ArkMenuOptionItemProps, 'type'>

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
        </>
      )}
    </S.OptionItem>
  )
}

export const MenuRadioItem = ({ children, ...props }: MenuOptionItemProps) => {
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
        </>
      )}
    </S.OptionItem>
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
            <ArkMenu
              onValueChange={(data) => {
                setLanguages((prev) => ({
                  ...prev,
                  [data.name]: data.value,
                }))
              }}
              value={languages}
              positioning={{ gutter: 16 }}
            >
              <S.TriggerItem>Languages</S.TriggerItem>
              <Portal>
                <S.Positioner>
                  <S.Content>
                    <MenuItemGroup id="languages">
                      <MenuRadioItem
                        name="languages"
                        id="english"
                        value="english"
                      >
                        English
                      </MenuRadioItem>
                      <MenuRadioItem
                        name="languages"
                        id="portuguese"
                        value="portuguese"
                      >
                        Portuguese
                      </MenuRadioItem>
                      <MenuRadioItem
                        name="languages"
                        id="spanish"
                        value="spanish"
                      >
                        Spanish
                      </MenuRadioItem>
                      <MenuRadioItem
                        name="languages"
                        id="french"
                        value="french"
                      >
                        French
                      </MenuRadioItem>
                      <MenuRadioItem
                        name="languages"
                        id="german"
                        value="german"
                      >
                        German
                      </MenuRadioItem>
                    </MenuItemGroup>
                  </S.Content>
                </S.Positioner>
              </Portal>
            </ArkMenu>
          </MenuItemGroup>

          <S.Arrow>
            <S.ArrowTip />
          </S.Arrow>
        </S.Content>
      </S.Positioner>
    </S.Root>
  )
}

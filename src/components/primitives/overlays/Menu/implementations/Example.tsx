import { useState } from 'react'

import S from '../styles'
import {
  MenuCheckboxItem,
  MenuItemGroup,
  MenuRadioItem,
  MenuTriggerItem,
} from '../index'
import { Button } from '@/components/primitives/buttons/Button'
import { ChevronRight } from 'lucide-react'

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

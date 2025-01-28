import S from '../styles'
import {
  MenuCheckboxItem,
  MenuItemGroup,
  MenuRadioItemGroup,
  MenuTriggerItem,
} from '../index'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/primitives/forms/buttons/Button'

export const Menu = () => {
  const languages = [
    {
      name: 'English',
      value: 'english',
      rightSlot: '🇺🇸',
    },
    {
      name: 'Portuguese',
      value: 'portuguese',
      rightSlot: '🇧🇷',
    },
    {
      name: 'Spanish',
      value: 'spanish',
      rightSlot: '🇪🇸',
    },
    {
      name: 'French',
      value: 'french',
      rightSlot: '🇫🇷',
    },
    {
      name: 'German',
      value: 'german',
      rightSlot: '🇩🇪',
    },
  ]

  const subscription = [
    {
      name: 'Basic Plan',
      value: 'basic',
    },
    {
      name: 'Pro Plan',
      value: 'pro',
    },
    {
      name: 'Enterprise Plan',
      value: 'enterprise',
    },
  ]

  return (
    <S.Root positioning={{ gutter: 16 }}>
      <S.Trigger asChild>
        <Button>Open Menu</Button>
      </S.Trigger>
      <S.Positioner>
        <S.Content>
          <MenuItemGroup id="userSettings" label="User settings">
            <MenuCheckboxItem value="login">Remember Login</MenuCheckboxItem>
            <MenuCheckboxItem value="darkMode">Dark Mode</MenuCheckboxItem>
            <MenuCheckboxItem value="notifications">
              Enable Notifications
            </MenuCheckboxItem>
          </MenuItemGroup>
          <S.Separator />

          <MenuRadioItemGroup label="Plan settings" radioItems={subscription} />
          <S.Separator />

          <MenuItemGroup id="profile" label="Profile Options">
            <S.Item value="edit-profile" id="editProfile">
              Edit Profile
            </S.Item>
            <S.Item value="friend-list" id="friendList">
              Friend List
            </S.Item>
            <MenuTriggerItem
              triggerLabel="Languages"
              rightSlot={<ChevronRight size={14} />}
            >
              <MenuRadioItemGroup radioItems={languages} />
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

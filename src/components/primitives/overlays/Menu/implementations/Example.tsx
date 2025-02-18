import {
  Menu,
  MenuArrow,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRadioItemGroup,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from '../index'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/primitives/forms/buttons/Button'

export const ExampleMenu = () => {
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
    <Menu positioning={{ gutter: 16, placement: 'bottom' }}>
      <MenuTrigger asChild>
        <Button>Open Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItemGroup id="userSettings" label="User settings">
          <MenuCheckboxItem value="login">Remember Login</MenuCheckboxItem>
          <MenuCheckboxItem value="darkMode">Dark Mode</MenuCheckboxItem>
          <MenuCheckboxItem value="notifications">
            Enable Notifications
          </MenuCheckboxItem>
        </MenuItemGroup>
        <MenuSeparator />

        <MenuRadioItemGroup label="Plan settings" radioItems={subscription} />
        <MenuSeparator />

        <MenuItemGroup id="profile" label="Profile Options">
          <MenuItem value="edit-profile" id="editProfile">
            Edit Profile
          </MenuItem>
          <MenuItem value="friend-list" id="friendList">
            Friend List
          </MenuItem>
          <MenuTriggerItem
            triggerLabel="Languages"
            rightSlot={<ChevronRight size={14} />}
          >
            <MenuRadioItemGroup radioItems={languages} />
          </MenuTriggerItem>
        </MenuItemGroup>

        <MenuArrow />
      </MenuContent>
    </Menu>
  )
}

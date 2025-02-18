import { IconButton } from '@/components/primitives/forms/buttons/IconButton'

import {
  Menu,
  MenuContent,
  MenuItemGroup,
  MenuTrigger,
  MenuItem,
  MenuArrow,
} from '@/components/primitives/overlays/Menu'
import { MenuItemProps } from '@ark-ui/react'
import { MoreHorizontal } from 'lucide-react'

type ActionMenuItemProp = Omit<MenuItemProps, 'value'>

type ActionsMenuProps = {
  viewCustomer?: ActionMenuItemProp
  paymentDetails?: ActionMenuItemProp
}

export const ActionsMenu = ({
  paymentDetails,
  viewCustomer,
}: ActionsMenuProps) => {
  return (
    <Menu positioning={{ gutter: 16 }}>
      <MenuTrigger asChild>
        <IconButton intent="ghost" size="sm" aria-label="Open actions">
          <MoreHorizontal />
        </IconButton>
      </MenuTrigger>
      <MenuContent>
        <MenuItemGroup id="actions" label="Actions">
          <MenuItem value="view-customer" {...viewCustomer}>
            View customer
          </MenuItem>
          <MenuItem value="payment-details" {...paymentDetails}>
            View payment details
          </MenuItem>
        </MenuItemGroup>
        <MenuArrow />
      </MenuContent>
    </Menu>
  )
}

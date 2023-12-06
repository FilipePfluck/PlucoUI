import type { Meta, StoryObj } from '@storybook/react'

import { Menu } from './index'

const meta: Meta<typeof Menu> = {
  component: Menu,
}

export default meta
type Story = StoryObj<typeof Menu>

export const Example: Story = {
  render: Menu,
}

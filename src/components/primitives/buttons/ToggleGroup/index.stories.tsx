import type { Meta, StoryObj } from '@storybook/react'

import { ToggleGroup } from './index'

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Vertical: Story = {
  render: () => <ToggleGroup />,
}

export const Horizontal: Story = {
  render: () => <ToggleGroup />,
}

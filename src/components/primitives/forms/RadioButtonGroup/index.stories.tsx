import type { Meta, StoryObj } from '@storybook/react'

import { RadioButtonGroup } from './index'

const meta: Meta<typeof RadioButtonGroup> = {
  component: RadioButtonGroup,
}

export default meta
type Story = StoryObj<typeof RadioButtonGroup>

const items = [
  { id: 'r1', label: 'S' },
  { id: 'r2', label: 'M' },
  { id: 'r3', label: 'L', disabled: true },
  { id: 'r4', label: 'XL' },
]

export const Vertical: Story = {
  render: () => <RadioButtonGroup label="Shirt size" items={items} />,
}

export const Horizontal: Story = {
  render: () => (
    <RadioButtonGroup
      label="Shirt size"
      orientation="horizontal"
      items={items}
    />
  ),
}

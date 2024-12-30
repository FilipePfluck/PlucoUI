import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './index'
import { selectItems } from './items'

const meta: Meta<typeof Select> = {
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    items: selectItems,
    label: 'food',
    placeholder: 'Pick a food',
  },
}

export const Multiple: Story = {
  args: {
    items: selectItems,
    label: 'food',
    placeholder: 'Pick a food',
    width: 'lg',
    multiple: true,
    clearable: true,
    showIndicator: true,
  },
}

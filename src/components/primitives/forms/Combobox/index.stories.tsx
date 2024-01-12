import type { Meta, StoryObj } from '@storybook/react'
import { Combobox } from './index'

const meta: Meta<typeof Combobox> = {
  component: Combobox,
}

export default meta
type Story = StoryObj<typeof Combobox>

export const Primary: Story = {
  render: () => <Combobox />,
}

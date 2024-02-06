import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from './index'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Primary: Story = {
  render: () => <DatePicker />,
}

export const Range: Story = {
  render: () => <DatePicker selectionMode="range" />,
}

export const Standalone: Story = {
  render: () => <DatePicker open closeOnSelect={false} />,
}

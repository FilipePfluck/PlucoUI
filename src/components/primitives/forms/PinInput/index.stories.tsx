import type { Meta, StoryObj } from '@storybook/react'

import { PinInput } from './index'

const meta: Meta<typeof PinInput> = {
  component: PinInput,
}

export default meta
type Story = StoryObj<typeof PinInput>

export const Primary: Story = {
  render: () => <PinInput placeholder="0" />,
}

import type { Meta, StoryObj } from '@storybook/react'

import { Signup } from './index'

const meta: Meta<typeof Signup> = {
  component: Signup,
}

export default meta
type Story = StoryObj<typeof Signup>

export const Primary: Story = {
  render: () => <Signup />,
}

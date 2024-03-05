import type { Meta, StoryObj } from '@storybook/react'

import { Kbd } from './index'

const meta = {
  component: Kbd,
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof Kbd>

export const KbdStory: Story = {
  args: {
    children: 'Shift + Alt',
  },
}

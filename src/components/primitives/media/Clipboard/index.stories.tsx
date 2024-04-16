import type { Meta, StoryObj } from '@storybook/react'

import { Demo } from './index'

const meta = {
  component: Demo,
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof Demo>

export const DemoStory: Story = {
  args: {},
}

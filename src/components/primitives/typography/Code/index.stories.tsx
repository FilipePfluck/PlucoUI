import type { Meta, StoryObj } from '@storybook/react'

import { Code } from './index'

const meta = {
  component: Code,
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof Code>

export const CodeStory: Story = {
  args: {
    children: 'import { Code } from "./Code"',
  },
}

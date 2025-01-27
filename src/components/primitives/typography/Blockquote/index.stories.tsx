import type { Meta, StoryObj } from '@storybook/react'

import { Blockquote } from './index'
import { Box } from '@/styled-system/jsx'

const meta = {
  component: Blockquote,
} satisfies Meta<typeof Blockquote>

export default meta
type Story = StoryObj<typeof Blockquote>

export const BlockquoteStory: Story = {
  args: {
    children:
      'Everybody should learn to program a computer, because it teaches you how to think',
  },
  argTypes: {
    variant: {
      control: 'radio',
    },
  },
  decorators: [
    (Story) => (
      <Box maxW="80">
        <Story />
      </Box>
    ),
  ],
}

export const WithCite: Story = {
  args: {
    children:
      'Everybody should learn to program a computer, because it teaches you how to think',
    cite: 'Steve Jobs',
  },
}

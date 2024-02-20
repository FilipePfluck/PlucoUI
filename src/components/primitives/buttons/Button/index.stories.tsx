import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './index'

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const ButtonStory: Story = {
  args: {
    children: 'Hello storybook',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    intent: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'ghost'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
}

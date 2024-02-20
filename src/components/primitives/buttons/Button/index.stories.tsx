import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, fn } from '@storybook/test'

import { Button } from './index'

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const ButtonStory: Story = {
  args: {
    children: 'Hello storybook',
    onClick: fn(),
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
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
  },
}

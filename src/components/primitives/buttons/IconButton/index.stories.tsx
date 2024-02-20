import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, fn } from '@storybook/test'

// import { Plus } from 'lucide-react'

import { IconButton } from './index'

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof IconButton>

export const IconButtonStory: Story = {
  args: {
    // TODO - add Plus icon here
    children: '+',
    onClick: fn(),
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    intent: {
      // TODO - see if there is a way to infer this from the component
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

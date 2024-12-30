import type { StoryObj } from '@storybook/react'
import { within, userEvent, expect, fn } from '@storybook/test'

import { IconButton } from '.'
import { Plus } from 'lucide-react'

type Story = StoryObj<typeof IconButton>

export const IconButtonTests: Story = {
  args: {
    children: 'plus',
    'aria-label': 'add',
    onClick: fn(),
  },
  argTypes: {
    children: {
      options: ['plus'],
      mapping: {
        plus: <Plus />,
      },
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, fn } from '@storybook/test'

import { Button } from '.'

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'components/primitives/forms/buttons/Button/test',
  args: {
    onSubmit: fn(),
  },
}

export default meta

export const ButtonTests: Story = {
  args: {
    children: 'Testing',
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
  },
}

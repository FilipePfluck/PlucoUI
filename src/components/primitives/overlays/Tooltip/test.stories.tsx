import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'

import { Tooltip } from '.'

type Story = StoryObj<typeof Tooltip>

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'components/primitives/overlays/Tooltip/test',
  args: {
    children: 'Tooltip',
    message: 'Content',
  },
}

export default meta

export const ShouldOpenOnHover: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.parentNode as HTMLElement)

    const trigger = canvas.getByRole('button')
    await userEvent.hover(trigger)

    const content = body.getByText('Content')
    await waitFor(() => expect(content).toBeVisible())
  },
}

export const ShouldCloseOnUnhover: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.parentNode as HTMLElement)

    const trigger = canvas.getByRole('button')
    await userEvent.hover(trigger)

    const content = body.getByText('Content')
    await waitFor(() => expect(content).toBeVisible())

    await userEvent.unhover(trigger)

    await waitFor(() => expect(content).not.toBeVisible())
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'
import { HoverCard } from '@ark-ui/react'

import { HoverCardContent } from '.'

type Story = StoryObj<typeof HoverCardContent>

const ExampleHoverCard = () => {
  return (
    <HoverCard.Root positioning={{ gutter: 24 }}>
      <HoverCard.Trigger>Trigger</HoverCard.Trigger>
      <HoverCardContent>Content</HoverCardContent>
    </HoverCard.Root>
  )
}

const meta: Meta<typeof ExampleHoverCard> = {
  component: ExampleHoverCard,
  title: 'components/primitives/overlays/HoverCard/test',
  args: {},
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

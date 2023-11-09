import { HoverCard } from '@ark-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { HoverCardContent } from '.'

const ExampleHoverCard = () => {
  return (
    <HoverCard.Root positioning={{ gutter: 24 }}>
      <HoverCard.Trigger>Hover me</HoverCard.Trigger>
      <HoverCardContent>
        This is a HoverCard this is a Hover Card this is a Hover Card this is a
        Hover Card this is a Hover Card
      </HoverCardContent>
    </HoverCard.Root>
  )
}

const meta: Meta<typeof ExampleHoverCard> = {
  component: ExampleHoverCard,
}

export default meta
type Story = StoryObj<typeof ExampleHoverCard>

export const Example: Story = {
  render: ExampleHoverCard,
}

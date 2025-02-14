import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'
import { Popover } from '@ark-ui/react'

import { PopoverContent } from '.'
import { Button } from '../../forms/buttons/Button'

type Story = StoryObj<typeof PopoverContent>

const ExamplePopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button>Open popover</Button>
      </Popover.Trigger>
      <PopoverContent
        title="This is a title"
        description="This is a description"
      >
        Content
      </PopoverContent>
    </Popover.Root>
  )
}

const meta: Meta<typeof ExamplePopover> = {
  component: ExamplePopover,
  title: 'components/primitives/overlays/Popover/test',
  args: {},
}

export default meta

export const ShouldOpenTheDialog: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.parentNode as HTMLElement)

    const trigger = canvas.getByRole('button')
    await userEvent.click(trigger)

    const dialog = body.getByRole('dialog')
    await waitFor(() => expect(dialog).toBeVisible())
  },
}

export const ShouldCloseTheDialog: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.parentNode as HTMLElement)

    const trigger = canvas.getByRole('button')
    await userEvent.click(trigger)

    const dialog = body.getByRole('dialog')
    await waitFor(() => expect(dialog).toBeVisible())

    const CloseTrigger = body.getByRole('button', { name: 'close' })
    await userEvent.click(CloseTrigger)

    await waitFor(() => expect(dialog).not.toBeVisible())
  },
}

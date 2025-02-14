import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'
import { Dialog } from '@ark-ui/react'

import { DialogContent } from '.'
import { Button } from '../../forms/buttons/Button'

type Story = StoryObj<typeof DialogContent>

const ExampleDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open modal</Button>
      </Dialog.Trigger>
      <DialogContent
        title="This is a title"
        description="This is a description"
      />
    </Dialog.Root>
  )
}

const meta: Meta<typeof DialogContent> = {
  component: DialogContent,
  title: 'components/primitives/overlays/Dialog/test',
  args: {},
  render: () => <ExampleDialog />,
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

    const CloseTrigger = body.getByRole('button', { name: 'Close' })
    await userEvent.click(CloseTrigger)

    await waitFor(() => expect(dialog).not.toBeVisible())
  },
}

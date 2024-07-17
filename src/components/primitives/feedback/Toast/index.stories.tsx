import { Button } from '../../buttons/Button'
// import { within, userEvent, expect, waitFor } from '@storybook/test'

// import { Toaster, toast } from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Button,
}

export default meta
type Story = StoryObj /* <typeof Toaster> */

export const Primary: Story = {
  render: () => (
    <>
      <Button
      /* onClick={() =>
          toast.create({
            title: 'Title',
            description: 'Description',
            removeDelay: 190,
          })
        } */
      >
        Open toast
      </Button>
      {/* <Toaster /> */}
    </>
  ),
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = await canvas.findByRole('button')

    await userEvent.click(button)

    await waitFor(async () => {
      // should open a toast when clicking the trigger
      const toast = await canvas.findByRole('status')
      expect(toast).toBeVisible()

      // should close the toast when clicking the close button
      const closeButton = await within(toast).findByRole('button')
      await userEvent.click(closeButton)
      expect(toast).not.toBeVisible()
    })
  }, */
}

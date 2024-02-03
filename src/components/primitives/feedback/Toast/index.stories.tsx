import { Button } from '../../buttons/Button'
import { Toaster, toast } from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Primary: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toast.create({
            title: 'Title',
            description: 'Description',
            removeDelay: 190,
          })
        }
      >
        Open toast
      </Button>
      <Toaster />
    </>
  ),
}

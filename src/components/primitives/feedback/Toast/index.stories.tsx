import { createToaster } from '@ark-ui/react'
import { Button } from '../../forms/buttons/Button'

import { Toast } from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Button,
}

export default meta
type Story = StoryObj /* <typeof Toaster> */

const toaster = createToaster({
  placement: 'bottom-end',
  gap: 24,
})

export const Primary: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toaster.create({
            title: 'Title',
            description: 'Description',
          })
        }
      >
        Open toast
      </Button>
      <Toast toaster={toaster} />
    </>
  ),
}

export const Success: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toaster.create({
            title: 'Title',
            description: 'Description',
            type: 'success',
          })
        }
      >
        Open toast
      </Button>
      <Toast toaster={toaster} />
    </>
  ),
}

export const Danger: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toaster.create({
            title: 'Title',
            description: 'Description',
            type: 'error',
          })
        }
      >
        Open toast
      </Button>
      <Toast toaster={toaster} />
    </>
  ),
}

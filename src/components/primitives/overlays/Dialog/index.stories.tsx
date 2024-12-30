import type { Meta, StoryObj } from '@storybook/react'

import { DialogContent } from './index'
import { Dialog } from '@ark-ui/react'
import { Button } from '../../forms/buttons/Button'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof DialogContent> = {
  component: DialogContent,
}

export default meta
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

const AlertExample = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open modal</Button>
      </Dialog.Trigger>
      <DialogContent
        title="This is a title"
        description="This is a description"
      >
        <Flex w="full" gap="4" mt="8">
          <Dialog.CloseTrigger asChild>
            <Button intent="secondary" full>
              Cancel
            </Button>
          </Dialog.CloseTrigger>
          <Button intent="primary" full>
            Confirm
          </Button>
        </Flex>
      </DialogContent>
    </Dialog.Root>
  )
}

export const Default: Story = {
  render: () => <ExampleDialog />,
}

export const WithChildren: Story = {
  render: () => <AlertExample />,
}

import type { Meta, StoryObj } from '@storybook/react'

import { DrawerContent } from './index'
import { Dialog } from '@ark-ui/react'
import { Button } from '../../buttons/Button'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof DrawerContent> = {
  component: DrawerContent,
}

// TODO - add controls to this story

export default meta
type Story = StoryObj<typeof DrawerContent>

const ExampleDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open drawer</Button>
      </Dialog.Trigger>
      <DrawerContent
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
        <Button>Open drawer</Button>
      </Dialog.Trigger>
      <DrawerContent
        title="This is a title"
        description="This is a description"
      >
        <Flex w="full" gap="4" mt="auto">
          <Dialog.CloseTrigger asChild>
            <Button intent="secondary" full>
              Cancel
            </Button>
          </Dialog.CloseTrigger>
          <Button intent="primary" full>
            Confirm
          </Button>
        </Flex>
      </DrawerContent>
    </Dialog.Root>
  )
}

export const Default: Story = {
  render: () => <ExampleDialog />,
}

export const WithChildren: Story = {
  render: () => <AlertExample />,
}

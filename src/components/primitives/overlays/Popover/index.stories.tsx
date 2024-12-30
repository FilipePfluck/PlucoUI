import { Popover } from '@ark-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../forms/buttons/Button'
import { PopoverContent } from '.'

const ExamplePopover = () => {
  return (
    <Popover.Root positioning={{ gutter: 24 }}>
      <Popover.Trigger asChild>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <PopoverContent
        title="This is a title"
        description="This is a description"
      >
        This is a popover this is a popover this is a popover this is a popover
      </PopoverContent>
    </Popover.Root>
  )
}

const meta: Meta<typeof ExamplePopover> = {
  component: ExamplePopover,
}

export default meta
type Story = StoryObj<typeof ExamplePopover>

export const Example: Story = {
  render: ExamplePopover,
}

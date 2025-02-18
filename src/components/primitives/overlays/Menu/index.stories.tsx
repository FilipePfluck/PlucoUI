import type { Meta, StoryObj } from '@storybook/react'

import { ExampleMenu } from './implementations/Example'

const meta: Meta<typeof ExampleMenu> = {
  component: ExampleMenu,
}

export default meta
type Story = StoryObj<typeof ExampleMenu>

export const Example: Story = {
  render: ExampleMenu,
}

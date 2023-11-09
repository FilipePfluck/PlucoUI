import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './index'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {
  render: () => (
    <Flex gap="4">
      <Tooltip message="Orange">🍊</Tooltip>
      <Tooltip message="Apple">🍎</Tooltip>
      <Tooltip message="Grape">🍇</Tooltip>
      <Tooltip message="Mango">🥭</Tooltip>
    </Flex>
  ),
}

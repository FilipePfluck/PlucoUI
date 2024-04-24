import type { Meta, StoryObj } from '@storybook/react'

import { Splitter } from './index'
import { Flex } from '@/styled-system/jsx'

const meta = {
  component: Splitter,
} satisfies Meta<typeof Splitter>

export default meta
type Story = StoryObj<typeof Splitter>

export const SplitterStory: Story = {
  args: {},
  render: () => (
    <Flex w="full" h="full" maxW="1000px" maxH="400px">
      <Splitter />
    </Flex>
  ),
}

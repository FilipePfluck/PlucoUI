import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './index'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof Slider> = {
  component: Slider,
}

export default meta
type Story = StoryObj<typeof Slider>

export const Primary: Story = {
  render: () => (
    <Flex gap="4">
      <Slider defaultValue={[0, 100]} />
    </Flex>
  ),
}

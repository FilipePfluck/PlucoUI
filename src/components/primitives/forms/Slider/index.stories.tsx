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
      <Slider defaultValue={[80]} min={0} max={100} label="Volume" />
    </Flex>
  ),
}

export const Range: Story = {
  render: () => (
    <Flex gap="4">
      <Slider defaultValue={[20, 80]} min={0} max={100} label="Range" />
    </Flex>
  ),
}

export const Markers: Story = {
  render: () => (
    <Flex gap="4">
      <Slider
        defaultValue={[80]}
        markers={[0, 25, 50, 75, 100]}
        min={0}
        max={100}
        label="Volume"
      />
    </Flex>
  ),
}

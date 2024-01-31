import type { Meta, StoryObj } from '@storybook/react'

import { Progress } from './index'
import { Box } from '@/styled-system/jsx'

const meta: Meta<typeof Progress> = {
  component: Progress,
}

export default meta
type Story = StoryObj<typeof Progress>

export const Primary: Story = {
  render: () => (
    <Box p="8" w="96" h="full" display="flex" flexDir="column" gap="4">
      <Progress value={0} />
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </Box>
  ),
}

export const Circular: Story = {
  render: () => (
    <Box p="8" w="96" display="flex" gap="4">
      <Progress value={0} type="circular" />
      <Progress value={25} type="circular" />
      <Progress value={50} type="circular" />
      <Progress value={75} type="circular" />
      <Progress value={100} type="circular" />
    </Box>
  ),
}

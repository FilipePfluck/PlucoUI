import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './index'
import { Box, Circle, HStack, Stack } from '@/styled-system/jsx'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {
  render: () => (
    <Box w="96">
      <HStack width="full" gap="4">
        <Skeleton borderRadius="full">
          <Circle size="20" />
        </Skeleton>
        <Stack gap="3.5" width="full">
          <Skeleton h="4" />
          <Skeleton h="4" width="80%" />
          <Skeleton h="4" width="60%" />
        </Stack>
      </HStack>
    </Box>
  ),
}

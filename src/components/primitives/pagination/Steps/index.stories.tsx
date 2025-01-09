import type { Meta, StoryObj } from '@storybook/react'

import { Steps } from './index'
import { Box } from '@/styled-system/jsx'

const meta: Meta<typeof Steps> = {
  component: Steps,
}

export default meta
type Story = StoryObj<typeof Steps>

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md" maxW="900px" w="full">
        <Story />
      </Box>
    ),
  ],
}

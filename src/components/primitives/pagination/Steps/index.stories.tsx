import type { Meta, StoryObj } from '@storybook/react'

import { Steps } from './index'
import { Box } from '@/styled-system/jsx'

const meta: Meta<typeof Steps> = {
  component: Steps,
}

export default meta
type Story = StoryObj<typeof Steps>

const items = [
  { value: 'first', title: 'First', description: 'Contact Info' },
  { value: 'second', title: 'Second', description: 'Date & Time' },
  { value: 'third', title: 'Third', description: 'Select Rooms' },
]

export const Default: Story = {
  args: { items },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md" maxW="900px" w="full">
        <Story />
      </Box>
    ),
  ],
}

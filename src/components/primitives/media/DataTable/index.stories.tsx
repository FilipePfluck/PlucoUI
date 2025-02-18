import type { Meta, StoryObj } from '@storybook/react'

import { Box } from '@/styled-system/jsx'
import { PaymentsTable } from './Implementations/Payments'

const meta = {
  component: PaymentsTable,
} satisfies Meta<typeof PaymentsTable>

export default meta
type Story = StoryObj<typeof PaymentsTable>

export const PaymentsTableStory: Story = {
  args: {},
  decorators: [
    (Story) => (
      <Box w="100vw" px="8">
        <Story />
      </Box>
    ),
  ],
}

import type { Meta, StoryObj } from '@storybook/react'

import { PinInput } from './index'
import { Box } from '@/styled-system/jsx'

const meta: Meta<typeof PinInput> = {
  component: PinInput,
}

export default meta
type Story = StoryObj<typeof PinInput>

export const Primary: Story = {
  render: () => <PinInput placeholder="0" />,
}

export const AllVariants: Story = {
  render: () => (
    <Box
      bg="bg.surface"
      p="4"
      rounded="md"
      shadow="md"
      display="flex"
      flexDir="column"
      gap="4"
    >
      <PinInput placeholder="0" />
      <PinInput placeholder="0" aria-invalid />
      <PinInput placeholder="0" disabled />
    </Box>
  ),
}

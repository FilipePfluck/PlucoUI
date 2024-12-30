import type { Meta, StoryObj } from '@storybook/react'

import { PinInput } from './index'
import { Box } from '@/styled-system/jsx'

const meta: Meta<typeof PinInput> = {
  component: PinInput,
}

export default meta
type Story = StoryObj<typeof PinInput>

export const PinInputStory: Story = {
  args: {
    placeholder: '0',
    length: 5,
    disabled: false,
    mask: false,
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    'aria-invalid': {
      control: 'boolean',
    },
  },
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
      <PinInput placeholder="0" size="xs" />
      <PinInput placeholder="0" aria-invalid size="xs" />
      <PinInput placeholder="0" disabled size="xs" />

      <PinInput placeholder="0" size="sm" />
      <PinInput placeholder="0" aria-invalid size="sm" />
      <PinInput placeholder="0" disabled size="sm" />

      <PinInput placeholder="0" />
      <PinInput placeholder="0" aria-invalid />
      <PinInput placeholder="0" disabled />

      <PinInput placeholder="0" size="lg" />
      <PinInput placeholder="0" aria-invalid size="lg" />
      <PinInput placeholder="0" disabled size="lg" />
    </Box>
  ),
}

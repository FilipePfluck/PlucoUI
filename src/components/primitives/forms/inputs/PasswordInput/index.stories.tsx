import type { Meta, StoryObj } from '@storybook/react'

import { PasswordInput } from './index'
import { Box } from '@/styled-system/jsx'

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
}

export default meta
type Story = StoryObj<typeof PasswordInput>

export const InputStory: Story = {
  args: {
    placeholder: 'this is an input',
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
    startAddon: {
      control: 'text',
    },
    endAddon: {
      control: 'text',
    },
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { Mail } from 'lucide-react'

import { Input } from './index'
import { Box } from '@/styled-system/jsx'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

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
      <Input size="xs" placeholder="I am xs" />
      <Input size="sm" placeholder="I am sm" />
      <Input placeholder="I am md" />
      <Input size="lg" placeholder="I am lg" />
      <Input
        name="email"
        placeholder="I have an icon"
        startElement={<Mail strokeWidth={1.5} size={18} />}
      />
      <Input
        name="email"
        placeholder="I have an error"
        aria-invalid={true}
        startElement={<Mail strokeWidth={1.5} size={18} />}
      />
      <Input
        name="email"
        placeholder="I am disabled"
        disabled
        startElement={<Mail strokeWidth={1.5} size={18} />}
      />
      <Input placeholder="yourwebsite.com" startAddon="https://" />
      <Input placeholder="yourwebsite" endAddon=".com" />
    </Box>
  ),
}

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

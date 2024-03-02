import type { Meta, StoryObj } from '@storybook/react'
import { Mail } from 'lucide-react'

import { Input } from './index'
import { PasswordInput } from '../PasswordInput'
import { Box } from '@/styled-system/jsx'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const All: Story = {
  render: () => (
    <Box
      bg="bg.card"
      p="4"
      rounded="md"
      shadow="md"
      display="flex"
      flexDir="column"
      gap="4"
    >
      <Input placeholder="I am an input" />
      <Input
        name="email"
        placeholder="I have an icon"
        icon={<Mail strokeWidth={1.5} size={18} />}
      />
      <Input
        name="email"
        placeholder="I have an error"
        aria-invalid={true}
        icon={<Mail strokeWidth={1.5} size={18} />}
      />
      <Input
        name="email"
        placeholder="I am disabled"
        disabled
        icon={<Mail strokeWidth={1.5} size={18} />}
      />
    </Box>
  ),
}

export const Default: Story = {
  render: () => (
    <Box bg="bg.card" p="4" rounded="md" shadow="md">
      <Input placeholder="This is an input" />
    </Box>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Input placeholder="I am disabled" disabled icon={<Mail size={18} />} />
  ),
}

export const Error: Story = {
  render: () => (
    <Box bg="bg.card" p="4" rounded="md" shadow="md">
      <Input
        placeholder="I have an error"
        aria-invalid={true}
        icon={<Mail strokeWidth={1.5} size={18} />}
      />
    </Box>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Input placeholder="Email" type="email" icon={<Mail size={18} />} />
  ),
}

export const Password: Story = {
  render: () => <PasswordInput />,
}

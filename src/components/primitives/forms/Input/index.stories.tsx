import type { Meta, StoryObj } from '@storybook/react'
import { Mail } from 'lucide-react'

import { Input } from './index'
import { PasswordInput } from '../PasswordInput'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => <Input placeholder="This is an input" />,
}

export const Disabled: Story = {
  render: () => (
    <Input placeholder="I am disabled" disabled icon={<Mail size={18} />} />
  ),
}

export const Error: Story = {
  render: () => (
    <Input
      placeholder="I have an error"
      aria-invalid={true}
      icon={<Mail size={18} />}
    />
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

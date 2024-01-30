import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from './index'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

const AvatarList = ({ ...props }: AvatarProps) => (
  <Flex gap="4" w="400px" align="center">
    <Avatar size="xs" name="Filipe Pfluck" fallback="initials" {...props} />
    <Avatar size="sm" name="Filipe Pfluck" fallback="initials" {...props} />
    <Avatar size="md" name="Filipe Pfluck" fallback="initials" {...props} />
    <Avatar size="lg" name="Filipe Pfluck" fallback="initials" {...props} />
    <Avatar size="xl" name="Filipe Pfluck" fallback="initials" {...props} />
  </Flex>
)

export const Primary: Story = {
  render: () => (
    <AvatarList src="https://avatars.githubusercontent.com/u/62773200?v=4" />
  ),
}

export const Gradient: Story = {
  render: () => (
    <AvatarList
      src="https://avatars.githubusercontent.com/u/62773200?v=4"
      gradientBorder
    />
  ),
}

export const Fallback: Story = {
  render: () => <AvatarList src="" fallback="initials" />,
}

export const IconFallback: Story = {
  render: () => <AvatarList src="" fallback="icon" />,
}

export const Online: Story = {
  render: () => (
    <AvatarList
      src="https://avatars.githubusercontent.com/u/62773200?v=4"
      status="online"
    />
  ),
}

export const DoNotDisturb: Story = {
  render: () => (
    <AvatarList
      src="https://avatars.githubusercontent.com/u/62773200?v=4"
      status="doNotDisturb"
    />
  ),
}

export const Idle: Story = {
  render: () => (
    <AvatarList
      src="https://avatars.githubusercontent.com/u/62773200?v=4"
      status="idle"
    />
  ),
}

export const Offline: Story = {
  render: () => (
    <AvatarList
      src="https://avatars.githubusercontent.com/u/62773200?v=4"
      status="offline"
    />
  ),
}

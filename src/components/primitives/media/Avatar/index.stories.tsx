import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './index'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  render: () => (
    <Flex gap="4" w="400px" align="center">
      <Avatar
        src="https://avatars.githubusercontent.com/u/62773200?v=4"
        size="xs"
        name="Filipe Pfluck"
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/62773200?v=4"
        size="sm"
        name="Filipe Pfluck"
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/62773200?v=4"
        size="md"
        name="Filipe Pfluck"
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/62773200?v=4"
        size="lg"
        name="Filipe Pfluck"
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/62773200?v=4"
        size="xl"
        name="Filipe Pfluck"
      />
    </Flex>
  ),
}

export const Fallback: Story = {
  render: () => (
    <Flex gap="4" w="400px" align="center">
      <Avatar src="" size="xs" name="Filipe Pfluck" fallback="initials" />
      <Avatar src="" size="sm" name="Filipe Pfluck" fallback="initials" />
      <Avatar src="" size="md" name="Filipe Pfluck" fallback="initials" />
      <Avatar src="" size="lg" name="Filipe Pfluck" fallback="initials" />
      <Avatar src="" size="xl" name="Filipe Pfluck" fallback="initials" />
    </Flex>
  ),
}

export const IconFallback: Story = {
  render: () => (
    <Flex gap="4" w="400px" align="center">
      <Avatar src="" size="xs" name="Filipe Pfluck" />
      <Avatar src="" size="sm" name="Filipe Pfluck" />
      <Avatar src="" size="md" name="Filipe Pfluck" />
      <Avatar src="" size="lg" name="Filipe Pfluck" />
      <Avatar src="" size="xl" name="Filipe Pfluck" />
    </Flex>
  ),
}

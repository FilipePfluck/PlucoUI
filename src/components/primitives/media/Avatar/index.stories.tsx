import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from './index'
import { Flex } from '@/styled-system/jsx'

import { css } from '@/styled-system/css'
import { AvatarGroup } from './styles'

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

export const Fallback: Story = {
  render: () => <AvatarList src="" fallback="initials" />,
}

export const IconFallback: Story = {
  render: () => <AvatarList src="" fallback="icon" />,
}

export const WithGradientBorder: Story = {
  render: () => (
    <AvatarList
      src="https://avatars.githubusercontent.com/u/62773200?v=4"
      className={css({
        gradientBorder: `linear-gradient(115deg, rgb(249, 206, 52), rgb(238, 42, 123), rgb(98, 40, 215))`,
        gradientBorderWidth: '2px',
        gradientBorderOffset: '2px',
      })}
    />
  ),
}

export const WithGroup: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar
        src="https://avatars.githubusercontent.com/u/62773200?v=4"
        size="md"
        name="Filipe Pfluck"
        fallback="initials"
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/62773200?v=4"
        size="md"
        name="Filipe Pfluck"
        fallback="initials"
        className={css({ outline: '2px solid var(--colors-bg-app)' })}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/62773200?v=4"
        size="md"
        name="Filipe Pfluck"
        fallback="initials"
        className={css({ outline: '2px solid var(--colors-bg-app)' })}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/62773200?v=4"
        size="md"
        name="Filipe Pfluck"
        fallback="initials"
        className={css({ outline: '2px solid var(--colors-bg-app)' })}
      />
    </AvatarGroup>
  ),
}

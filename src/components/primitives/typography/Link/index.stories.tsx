import type { Meta, StoryObj } from '@storybook/react'

import { Link } from './index'

const meta = {
  component: Link,
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof Link>

export const LinkStory: Story = {
  args: {
    children: 'Ark UI',
    href: 'https://ark-ui.com/',
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { Breadcrumb } from './index'

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

const links = [
  { href: '#', label: 'Docs' },
  { href: '#', label: 'Components' },
]

export const BreadcrumbStory: Story = {
  args: { links, currentLink: 'Breadcrumb' },
}

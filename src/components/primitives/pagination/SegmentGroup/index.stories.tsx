import type { Meta, StoryObj } from '@storybook/react'

import { SegmentGroup } from './index'

const meta: Meta<typeof SegmentGroup> = {
  component: SegmentGroup,
}

export default meta
type Story = StoryObj<typeof SegmentGroup>

export const Vertical: Story = {
  render: () => (
    <SegmentGroup
      items={['Anatomy', 'Examples', 'API Reference']}
      defaultValue="Anatomy"
    />
  ),
}

export const Horizontal: Story = {
  render: () => (
    <SegmentGroup
      items={['Anatomy', 'Examples', 'API Reference']}
      defaultValue="Anatomy"
      orientation="horizontal"
    />
  ),
}

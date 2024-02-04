import type { Meta, StoryObj } from '@storybook/react'

import { RatingGroup } from './index'

const meta: Meta<typeof RatingGroup> = {
  component: RatingGroup,
}

export default meta
type Story = StoryObj<typeof RatingGroup>

export const Primary: Story = {
  render: () => <RatingGroup label="Rate this product" />,
}

export const ReadOnly: Story = {
  render: () => <RatingGroup label="Rate of this product" readOnly value={4} />,
}

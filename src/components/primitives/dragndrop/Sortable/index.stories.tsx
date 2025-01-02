import type { Meta, StoryObj } from '@storybook/react'

import { Sortable } from './index'

const meta: Meta<typeof Sortable> = {
  component: Sortable,
}

export default meta
type Story = StoryObj<typeof Sortable>

export const SortableStory: Story = {
  args: {},
}

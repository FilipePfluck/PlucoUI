import type { Meta, StoryObj } from '@storybook/react'

import { MultipleContainers } from './index'

const meta: Meta<typeof MultipleContainers> = {
  component: MultipleContainers,
}

export default meta
type Story = StoryObj<typeof MultipleContainers>

export const KanbanStory: Story = {
  args: {},
}

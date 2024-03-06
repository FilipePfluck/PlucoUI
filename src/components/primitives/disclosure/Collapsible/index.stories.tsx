import type { Meta, StoryObj } from '@storybook/react'

import { FruitGrid } from './implementations/FruitGrid'

const meta: Meta<typeof FruitGrid> = {
  component: FruitGrid,
}

export default meta
type Story = StoryObj<typeof FruitGrid>

export const CollapsibleStory: Story = {
  render: () => <FruitGrid />,
}

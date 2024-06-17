import type { Meta, StoryObj } from '@storybook/react'

import { Fruits } from './implementations/FruitGrid'

const meta: Meta<typeof Fruits> = {
  component: Fruits,
}

export default meta
type Story = StoryObj<typeof Fruits>

export const CollapsibleStory: Story = {
  render: () => <Fruits />,
}

import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'

import { Tabs, TabItem } from './index'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

const items: TabItem[] = [
  {
    id: 'tomato',
    name: (
      <>
        <p style={{ color: 'inherit' }}>Tomato</p>
        🍅
      </>
    ),
    content: '🍅',
    index: 0,
  },
  {
    id: 'carrot',
    name: (
      <>
        <p style={{ color: 'inherit' }}>Carrot</p>
        🥕
      </>
    ),
    content: '🥕',
    index: 1,
  },
  {
    id: 'lettuce',
    name: (
      <>
        <p style={{ color: 'inherit' }}>Lettuce</p>
        🥬
      </>
    ),
    content: '🥬',
    index: 2,
  },
  {
    id: 'potato',
    name: (
      <>
        <p style={{ color: 'inherit' }}>Potato</p>
        🥔
      </>
    ),
    content: '🥔',
    index: 3,
    disabled: true,
  },
]

export const Horizontal: Story = {
  args: {
    items,
    defaultValue: 'tomato',
    orientation: 'horizontal',
  },
}

export const Vertical: Story = {
  args: {
    items,
    defaultValue: 'tomato',
    orientation: 'vertical',
  },
}

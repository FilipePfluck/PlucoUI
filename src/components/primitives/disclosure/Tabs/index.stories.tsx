import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './index'
import { css } from '@/styled-system/css'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

const items = [
  {
    id: 'tomato',
    name: (
      <>
        <p>Tomato</p>
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
        <p>Carrot</p>
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
        <p>Lettuce</p>
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
        <p>Potato</p>
        🥔
      </>
    ),
    content: '🥔',
    index: 3,
  },
]

export const Horizontal: Story = {
  render: () => (
    <div className={css({ maxW: 'max-content', w: 'full' })}>
      <Tabs items={items} defaultValue="tomato" />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className={css({ maxW: 'max-content', w: 'full' })}>
      <Tabs items={items} defaultValue="tomato" orientation="vertical" />
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'

import { Tabs } from './index'

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
  },
]

export const Horizontal: Story = {
  render: () => <Tabs items={items} defaultValue="tomato" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const tomatoPanel = canvas.getByRole('tabpanel', { name: 'Tomato 🍅' })

    // tomato panel should be visible by default
    await expect(tomatoPanel).toBeVisible()

    // should be able to select next panel with the keyboard
    await userEvent.tab()
    await userEvent.keyboard('{ArrowRight}')

    await waitFor(() => {
      const carrotPanel = canvas.getByRole('tabpanel', { name: 'Carrot 🥕' })
      expect(carrotPanel).toBeVisible()
    })

    const tomatoTab = canvas.getByRole('tab', { name: 'Tomato 🍅' })

    // should be able to select a panel by clicking
    await userEvent.click(tomatoTab)
    await waitFor(() => {
      const tomatoPanel = canvas.getByRole('tabpanel', { name: 'Tomato 🍅' })
      expect(tomatoPanel).toBeVisible()
    })
  },
}

export const Vertical: Story = {
  render: () => (
    <Tabs items={items} defaultValue="tomato" orientation="vertical" />
  ),
}

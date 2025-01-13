import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'

import { TabItem, Tabs } from '.'

type Story = StoryObj<typeof Tabs>

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'components/primitives/disclosure/Tabs/test',
  args: {},
}

export default meta

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

export const ShouldControlTabs: Story = {
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

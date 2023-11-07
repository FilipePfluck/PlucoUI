import type { Meta, StoryObj } from '@storybook/react'
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react'

import { ToggleGroup, ToggleProps } from './index'

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
}

const items: ToggleProps[] = [
  {
    id: 'align-left',
    'aria-label': 'align left',
    children: <AlignLeft size={16} />,
  },
  {
    id: 'align-center',
    'aria-label': 'align center',
    children: <AlignCenter size={16} />,
  },
  {
    id: 'align-right',
    'aria-label': 'align right',
    children: <AlignRight size={16} />,
  },
]

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Vertical: Story = {
  render: () => <ToggleGroup items={items} orientation="vertical" />,
}

export const Horizontal: Story = {
  render: () => <ToggleGroup items={items} orientation="horizontal" />,
}

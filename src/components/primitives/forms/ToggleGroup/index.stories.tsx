import type { Meta, StoryObj } from '@storybook/react'

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
} from 'lucide-react'

import { ToggleGroup, ToggleProps } from './index'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
}

const formatItems: ToggleProps[] = [
  {
    id: 'bold',
    'aria-label': 'bold',
    children: <Bold size={16} />,
  },
  {
    id: 'italic',
    'aria-label': 'italic',
    children: <Italic size={16} />,
  },
  {
    id: 'underline',
    'aria-label': 'underline',
    children: <Underline size={16} />,
  },
]

const alignItems: ToggleProps[] = [
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
  {
    id: 'align-justify',
    'aria-label': 'justify',
    children: <AlignJustify size={16} />,
    disabled: true,
  },
]

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Horizontal: Story = {
  render: () => (
    <Flex gap="4">
      <ToggleGroup items={formatItems} multiple orientation="horizontal" />
      <ToggleGroup items={alignItems} orientation="horizontal" />
    </Flex>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <ToggleGroup items={formatItems} multiple orientation="vertical" />
      <ToggleGroup items={alignItems} orientation="vertical" />
    </Flex>
  ),
}

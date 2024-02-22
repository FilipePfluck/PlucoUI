import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from 'lucide-react'

import { ToggleGroup, ToggleProps } from './index'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
}

const testItems: ToggleProps[] = [
  {
    id: 'first',
    'aria-label': 'first item',
    children: '1',
  },
  {
    id: 'second',
    'aria-label': 'second item',
    children: '2',
  },
  {
    id: 'third',
    'aria-label': 'third item',
    children: '3',
  },
]

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

export const Single: Story = {
  args: {
    items: testItems,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // the first item should not start checked
    const firstItem = canvas.getByLabelText('first item')
    await expect(firstItem).not.toBeChecked()

    // click the first element, it should be checked now
    await userEvent.click(firstItem)
    await expect(firstItem).toBeChecked()

    // the second item should not start checked
    const secondItem = canvas.getByLabelText('second item')
    await expect(secondItem).not.toBeChecked()

    // click the second element, it should be checked now
    await userEvent.click(secondItem)
    await expect(secondItem).toBeChecked()

    // the first item shouldn't be checked anymore
    await expect(firstItem).not.toBeChecked()

    // click the second element, it should uncheck
    await userEvent.click(secondItem)
    await expect(secondItem).not.toBeChecked()

    // it should return the focus to the second item
    await expect(secondItem).toHaveFocus()

    // press right arrow, it should focus the next item
    const thirdItem = canvas.getByLabelText('third item')
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(thirdItem).toHaveFocus())

    // press space, it should check the item
    await userEvent.keyboard(' ')
    await expect(thirdItem).toBeChecked()

    // press space, it should uncheck the item
    await userEvent.keyboard(' ')
    await expect(thirdItem).not.toBeChecked()
  },
}

export const Multiple: Story = {
  args: {
    items: testItems,
    multiple: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // FYI: when multiple is true, we don't use role='checkbox'
    // and therefore we can't use aria-checked
    // that's why we are checking for data-state instead

    // the first item should not start checked
    const firstItem = canvas.getByLabelText('first item')
    await expect(firstItem).toHaveAttribute('data-state', 'off')

    // click the first element, it should be checked now
    await userEvent.click(firstItem)
    await expect(firstItem).toHaveAttribute('data-state', 'on')

    // the second item should not start checked
    const secondItem = canvas.getByLabelText('second item')
    await expect(secondItem).toHaveAttribute('data-state', 'off')

    // click the second element, it should be checked now
    await userEvent.click(secondItem)
    await expect(secondItem).toHaveAttribute('data-state', 'on')

    // the first item should still be checked
    // (because this toggle group allows multiple checks)
    await expect(firstItem).toHaveAttribute('data-state', 'on')
  },
}

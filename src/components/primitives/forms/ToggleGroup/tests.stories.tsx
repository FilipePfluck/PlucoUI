import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'

import { ToggleGroup, ToggleProps } from '.'

type Story = StoryObj<typeof ToggleGroup>

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
  title: 'components/primitives/forms/ToggleGroup/test',
  args: {},
}

export default meta

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

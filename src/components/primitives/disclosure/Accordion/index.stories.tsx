import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'

import { Accordion } from './index'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

const data = [
  {
    id: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-2',
    title: 'Is it styled?',
    content: 'Yes, it comes with beautifull styles by default.',
  },
  {
    id: 'item-3',
    title: 'Is it animated?',
    content: 'Yes, it comes with beautifull animations by default.',
  },
]

export const AccordionStory: Story = {
  args: {
    items: data,
    multiple: false,
    collapsible: false,
  },
}

export const Single: Story = {
  args: {
    items: data,
    multiple: false,
    collapsible: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const firstItem = canvas.getByText(
      'Yes. It adheres to the WAI-ARIA design pattern.',
    )

    const secondItem = canvas.getByText(
      'Yes, it comes with beautifull styles by default.',
    )

    const thirdItem = canvas.getByText(
      'Yes, it comes with beautifull animations by default.',
    )

    await waitFor(() => expect(firstItem).not.toBeVisible())
    await waitFor(() => expect(secondItem).not.toBeVisible())

    const [firstItemTrigger, secondItemTrigger, thirdItemTrigger] =
      canvas.getAllByRole('button')

    // click the first trigger. The first item should now be visible
    await userEvent.click(firstItemTrigger)
    await expect(firstItem).toBeVisible()

    // click the second trigger.
    // The second item should now be visible
    // and the first one should not

    await userEvent.click(secondItemTrigger)
    await waitFor(() => expect(secondItem).toBeVisible())
    await waitFor(() => expect(firstItem).not.toBeVisible())

    // should select the next item when pressing tab
    // should open it when pressing space

    await userEvent.tab()
    await expect(thirdItemTrigger).toHaveFocus()
    await userEvent.keyboard(' ')
    await expect(thirdItem).toBeVisible()
  },
}

export const Multiple: Story = {
  args: {
    items: data,
    multiple: true,
    collapsible: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const firstItem = canvas.getByText(
      'Yes. It adheres to the WAI-ARIA design pattern.',
    )

    const secondItem = canvas.getByText(
      'Yes, it comes with beautifull styles by default.',
    )

    const thirdItem = canvas.getByText(
      'Yes, it comes with beautifull animations by default.',
    )

    await waitFor(() => expect(firstItem).not.toBeVisible())
    await waitFor(() => expect(secondItem).not.toBeVisible())

    const [firstItemTrigger, secondItemTrigger, thirdItemTrigger] =
      canvas.getAllByRole('button')

    // click the first trigger. The first item should now be visible
    await userEvent.click(firstItemTrigger)
    await expect(firstItem).toBeVisible()

    // click the second trigger.
    // The second item should now be visible
    // and the first one too

    await userEvent.click(secondItemTrigger)
    await waitFor(() => expect(secondItem).toBeVisible())
    await waitFor(() => expect(firstItem).toBeVisible())

    // should select the next item when pressing tab
    // should open it when pressing space

    await userEvent.tab()
    await expect(thirdItemTrigger).toHaveFocus()
    await userEvent.keyboard(' ')
    await expect(thirdItem).toBeVisible()
  },
}

export const DefaultOpen: Story = {
  args: {
    items: data,
    multiple: true,
    collapsible: true,
    defaultValue: ['item-1'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const firstItem = canvas.getByText(
      'Yes. It adheres to the WAI-ARIA design pattern.',
    )

    const secondItem = canvas.getByText(
      'Yes, it comes with beautifull styles by default.',
    )

    // the first Item should be visible by default
    // the second item should not be visible by default

    await waitFor(() => expect(firstItem).toBeVisible())
    await waitFor(() => expect(secondItem).not.toBeVisible())
  },
}

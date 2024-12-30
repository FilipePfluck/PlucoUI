import type { Meta, StoryObj } from '@storybook/react'

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
  {
    id: 'item-4',
    title: 'Is it disabled?',
    content: 'Yes, it is disabled',
    disabled: true,
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
}

export const Multiple: Story = {
  args: {
    items: data,
    multiple: true,
    collapsible: false,
  },
}

export const DefaultOpen: Story = {
  args: {
    items: data,
    multiple: true,
    collapsible: true,
    defaultValue: ['item-1'],
  },
}

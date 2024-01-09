import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './index'

const meta: Meta<typeof Select> = {
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

const items = [
  {
    groupLabel: 'Fruits',
    id: 'fruits',
    items: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Banana',
        value: 'banana',
      },
      {
        label: 'Blueberry',
        value: 'blueberry',
      },
      {
        label: 'Grapes',
        value: 'grapes',
      },
      {
        label: 'Pineapple',
        value: 'pineapple',
      },
    ],
  },
  {
    groupLabel: 'Vegetables',
    id: 'vieggies',
    items: [
      {
        label: 'Aubergine',
        value: 'aubergine',
        disabled: true,
      },
      {
        label: 'Broccoli',
        value: 'broccoli',
      },
      {
        label: 'Carrot',
        value: 'carrot',
      },
    ],
  },
  {
    groupLabel: 'Meats',
    id: 'meats',
    items: [
      {
        label: 'Beef',
        value: 'beef',
      },
      {
        label: 'Chicken',
        value: 'chicken',
      },
      {
        label: 'Lamb',
        value: 'lamb',
      },
      {
        label: 'Pork',
        value: 'pork',
      },
    ],
  },
]

export const Default: Story = {
  render: () => <Select items={items} label="food" placeholder="Pick a food" />,
}

export const Multiple: Story = {
  render: () => (
    <Select
      items={items}
      label="food"
      placeholder="Pick a food"
      width="lg"
      multiple
      clearable
      showIndicator
    />
  ),
}

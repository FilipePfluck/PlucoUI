import type { Meta, StoryObj } from '@storybook/react'

import { Table } from './index'
import { Box } from '@/styled-system/jsx'

const meta = {
  component: Table,
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof Table>

const items = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
  { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
  { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
]

export const TableStory: Story = {
  args: {
    data: items,
    columns: [
      { key: 'name', label: 'Product' },
      { key: 'category', label: 'Category' },
      {
        key: 'price',
        label: 'Price',
        headerProps: { css: { textAlign: 'end' } },
        cellProps: { css: { textAlign: 'end' } },
      },
    ] as const,
    dataUniqueIdentifier: 'id',
  },
  decorators: [
    (Story) => (
      <Box w="100vw" px="8">
        <Story />
      </Box>
    ),
  ],
}

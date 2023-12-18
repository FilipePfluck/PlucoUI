import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './index'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Vertical: Story = {
  render: () => <Pagination />,
}

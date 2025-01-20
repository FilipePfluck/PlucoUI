import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

import { Pagination } from '.'

type Story = StoryObj<typeof Pagination>

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'components/primitives/pagination/Pagination/test',
  args: {},
}

export default meta

export const ShouldNavigate: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const firstPage = canvas.getByRole('button', { name: 'page 1' })

    expect(firstPage).toHaveAttribute('aria-current', 'page')

    const nextPageTrigger = canvas.getByRole('button', { name: 'Next page' })

    await userEvent.click(nextPageTrigger)

    const secondPage = canvas.getByRole('button', { name: 'page 2' })

    expect(secondPage).toHaveAttribute('aria-current', 'page')

    const fourthPage = canvas.getByRole('button', { name: 'page 4' })

    await userEvent.click(fourthPage)

    expect(fourthPage).toHaveAttribute('aria-current', 'page')
  },
}

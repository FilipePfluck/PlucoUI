import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, fn, expect } from '@storybook/test'

import { RatingGroup } from '.'

type Story = StoryObj<typeof RatingGroup>

const meta: Meta<typeof RatingGroup> = {
  component: RatingGroup,
  title: 'components/primitives/forms/RatingGroup/test',
  args: {
    onSubmit: fn(),
  },
}

export default meta

export const ShouldBeAbleToRate: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const [first, second, third] = canvas.getAllByRole('radio')

    await userEvent.tab()

    await userEvent.keyboard('{ArrowRight}')
    expect(first).toBeChecked()

    await userEvent.keyboard('{ArrowRight}')
    expect(second).toBeChecked()

    await userEvent.keyboard('{ArrowRight}')
    expect(third).toBeChecked()

    await userEvent.keyboard('{ArrowLeft}')
    expect(third).not.toBeChecked()
    expect(second).toBeChecked()
  },
}

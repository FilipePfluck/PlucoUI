import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, fn, expect } from '@storybook/test'

import { Slider } from '.'

type Story = StoryObj<typeof Slider>

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'components/primitives/forms/Slider/test',
  args: {
    onSubmit: fn(),
  },
}

export default meta

export const ShouldHandleArrows: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.tab()

    const slider = canvas.getByRole('slider')

    expect(slider).toHaveFocus()
    expect(slider).toHaveAttribute('aria-valuenow', '0')

    await userEvent.keyboard('{ArrowRight>5}')

    expect(slider).toHaveAttribute('aria-valuenow', '5')

    await userEvent.keyboard('{ArrowLeft>3}')

    expect(slider).toHaveAttribute('aria-valuenow', '2')
  },
}

export const ShouldHandlePgKeys: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.tab()

    const slider = canvas.getByRole('slider')

    expect(slider).toHaveFocus()
    expect(slider).toHaveAttribute('aria-valuenow', '0')

    await userEvent.keyboard('{PageUp>2}')

    expect(slider).toHaveAttribute('aria-valuenow', '20')

    await userEvent.keyboard('{PageDown}')

    expect(slider).toHaveAttribute('aria-valuenow', '10')
  },
}

export const ShouldHandleHomeAndEnd: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.tab()

    const slider = canvas.getByRole('slider')

    expect(slider).toHaveFocus()
    expect(slider).toHaveAttribute('aria-valuenow', '0')

    await userEvent.keyboard('{End}')

    expect(slider).toHaveAttribute('aria-valuenow', '100')

    await userEvent.keyboard('{Home}')

    expect(slider).toHaveAttribute('aria-valuenow', '0')
  },
}

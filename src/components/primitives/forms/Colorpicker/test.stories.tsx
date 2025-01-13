import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, fn, expect, waitFor } from '@storybook/test'

import { Colorpicker } from '.'

type Story = StoryObj<typeof Colorpicker>

const meta: Meta<typeof Colorpicker> = {
  component: Colorpicker,
  title: 'components/primitives/forms/Colorpicker/test',
  args: {
    onSubmit: fn(),
  },
}

export default meta

export const ShouldOpenPicker: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // targetting the parent because the popup is within a portal
    const canvas = within(canvasElement.parentNode as HTMLElement)

    const trigger = canvas.getByRole('button')

    await userEvent.click(trigger)

    const content = await waitFor(() =>
      canvas.getByTestId('color-picker-content'),
    )

    expect(content).toBeVisible()
  },
}

export const ShouldClosePicker: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // targetting the parent because the popup is within a portal
    const canvas = within(canvasElement.parentNode as HTMLElement)

    const trigger = canvas.getByRole('button')

    await userEvent.click(trigger)

    const content = await waitFor(() =>
      canvas.getByTestId('color-picker-content'),
    )

    expect(content).toBeVisible()

    await userEvent.keyboard('{Escape}')

    expect(content).not.toBeVisible()
  },
}

export const ShouldBeAbleToChangeValueWithInput: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // targetting the parent because the popup is within a portal
    const canvas = within(canvasElement.parentNode as HTMLElement)

    const trigger = canvas.getByRole('button')

    await userEvent.click(trigger)

    const content = await waitFor(() =>
      canvas.getByTestId('color-picker-content'),
    )

    expect(content).toBeVisible()

    const contentCanvas = within(content)

    const input = contentCanvas.getAllByRole('textbox')[0]

    await userEvent.type(input, '#ff0000')

    await userEvent.tab()

    await userEvent.keyboard('{Escape}')

    const valueInput = canvas.getByRole('textbox')

    expect(valueInput).toHaveValue('#FF0000')
  },
}

export const ShouldBeAbleToChangeValueWithSliders: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // targetting the parent because the popup is within a portal
    const canvas = within(canvasElement.parentNode as HTMLElement)

    const trigger = canvas.getByRole('button')

    await userEvent.click(trigger)

    const [areaSlider, hueSlider] = canvas.getAllByRole('slider')

    await userEvent.click(areaSlider)

    expect(areaSlider).toHaveFocus()

    await userEvent.keyboard('{ArrowRight>30}')

    await userEvent.click(hueSlider)

    expect(hueSlider).toHaveFocus()

    await userEvent.keyboard('{ArrowRight>30}')

    await userEvent.keyboard('{Escape}')

    const valueInput = canvas.getByRole('textbox')

    expect(valueInput).toHaveValue('#FFD9B3')
  },
}

export const ShouldBeAbleToSelectValueFromSwatch: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // targetting the parent because the popup is within a portal
    const canvas = within(canvasElement.parentNode as HTMLElement)

    const trigger = canvas.getByRole('button')

    await userEvent.click(trigger)

    const swatchGroup = canvas.getAllByRole('group')[3]

    const [firstSwatch] = within(swatchGroup).getAllByRole('button')

    await userEvent.click(firstSwatch)

    await userEvent.keyboard('{Escape}')

    const valueInput = canvas.getByRole('textbox')

    expect(valueInput).toHaveValue('#EB5E42')
  },
}

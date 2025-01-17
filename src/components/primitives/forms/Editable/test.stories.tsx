import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, fn, expect, waitFor } from '@storybook/test'

import { Editable } from '.'

type Story = StoryObj<typeof Editable>

const meta: Meta<typeof Editable> = {
  component: Editable,
  title: 'components/primitives/forms/Editable/test',
  args: {
    onSubmit: fn(),
  },
}

export default meta

export const ShouldBeAbleToEdit: Story = {
  args: {
    placeholder: 'Double Click to edit',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const trigger = canvas.getByRole('button')

    await userEvent.click(trigger)

    const input = canvas.getByRole('textbox')

    expect(input).toBeVisible()

    await userEvent.type(input, 'Test')

    const saveTrigger = canvas.getByRole('button', { name: 'Save' })

    await userEvent.click(saveTrigger)

    const textValue = canvas.getByText('Test')

    expect(textValue).toBeVisible()
  },
}

export const ShouldDoubleClick: Story = {
  args: {
    activationMode: 'dblclick',
    placeholder: 'Double Click to edit',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const value = canvas.getByText('Double Click to edit')

    await userEvent.dblClick(value)

    const input = await waitFor(() => canvas.getByRole('textbox'))

    expect(input).toBeVisible()

    await userEvent.type(input, 'Test')

    const saveTrigger = canvas.getByRole('button', { name: 'Save' })

    await userEvent.click(saveTrigger)

    const textValue = canvas.getByText('Test')

    expect(textValue).toBeVisible()
  },
}

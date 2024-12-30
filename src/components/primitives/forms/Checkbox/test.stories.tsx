import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, fn, expect } from '@storybook/test'

import { Checkbox } from '.'

type Story = StoryObj<typeof Checkbox>

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'components/primitives/forms/Checkbox/test',
  args: {
    onSubmit: fn(),
  },
}

export default meta

export const CheckboxTests: Story = {
  args: {
    label: 'I accept the terms and conditions',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.tab()

    const checkbox = canvas.getByRole('checkbox')

    await expect(checkbox).toHaveFocus()

    await userEvent.keyboard('[Space]')

    await expect(checkbox).toHaveProperty('checked', true)

    await userEvent.keyboard('[Space]')

    await expect(checkbox).toHaveProperty('checked', false)
  },
}

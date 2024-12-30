import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'

import { Select } from '.'
import { selectItems } from './items'

type Story = StoryObj<typeof Select>

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'components/primitives/forms/Select/test',
}

export default meta

export const ShouldOpenTheSelect: Story = {
  args: {
    items: selectItems,
    placeholder: 'Pick a food',
  },
  play: async ({ canvasElement }) => {
    // Targetting the parentNode (body)
    // because the list is rendered inside a Portal
    // so usually canvasElement wouldn't contain it
    const canvas = within(canvasElement.parentNode as HTMLElement)

    const button = canvas.getByRole('combobox')

    await userEvent.click(button)

    const list = canvas.getByRole('listbox')

    await waitFor(() => expect(list).toBeVisible())
  },
}

export const ShouldSelectAnOption: Story = {
  args: {
    items: selectItems,
    placeholder: 'Pick a food',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentNode as HTMLElement)

    const button = canvas.getByRole('combobox')

    await userEvent.click(button)

    const Apple = canvas.getByRole('option', { name: 'Apple' })

    await userEvent.click(Apple)

    const combobox = within(button)

    const valueText = combobox.getByText('Apple')

    // Not sure if this is the best way
    // to assert if the correct value is selected
    await waitFor(() => expect(valueText).toBeVisible())
  },
}

export const ShouldSelectASingleOption: Story = {
  args: {
    items: selectItems,
    placeholder: 'Pick a food',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentNode as HTMLElement)

    const button = canvas.getByRole('combobox')

    await userEvent.click(button)

    const Apple = canvas.getByRole('option', { name: 'Apple' })

    await userEvent.click(Apple)

    await userEvent.click(button)

    const Grapes = canvas.getByRole('option', { name: 'Grapes' })

    await userEvent.click(Grapes)

    const combobox = within(button)

    const valueText = combobox.getByText('Grapes')

    // Not sure if this is the best way
    // to assert if the correct value is selected
    await waitFor(() => expect(valueText).toBeVisible())
  },
}

export const ShouldSelectMultipleOptions: Story = {
  args: {
    items: selectItems,
    placeholder: 'Pick a food',
    multiple: true,
    width: 'lg',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentNode as HTMLElement)

    const button = canvas.getByRole('combobox')

    await userEvent.click(button)

    const Apple = canvas.getByRole('option', { name: 'Apple' })
    const Grapes = canvas.getByRole('option', { name: 'Grapes' })

    await userEvent.click(Apple)
    await userEvent.click(Grapes)

    const combobox = within(button)

    const valueText = combobox.getByText('Apple, Grapes')

    // Not sure if this is the best way
    // to assert if the correct value is selected
    await waitFor(() => expect(valueText).toBeVisible())
  },
}

export const ShouldClearOptions: Story = {
  args: {
    items: selectItems,
    placeholder: 'Pick a food',
    multiple: true,
    width: 'lg',
    clearable: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentNode as HTMLElement)

    const button = canvas.getByRole('combobox')

    await userEvent.click(button)

    const Apple = canvas.getByRole('option', { name: 'Apple' })
    const Grapes = canvas.getByRole('option', { name: 'Grapes' })

    await userEvent.click(Apple)
    await userEvent.click(Grapes)

    const combobox = within(button)

    const clearValue = canvas.getByRole('button', { name: 'Clear value' })

    await userEvent.click(clearValue)

    const valueText = combobox.getByText('Pick a food')

    // Not sure if this is the best way
    // to assert if the correct value is selected
    await waitFor(() => expect(valueText).toBeVisible())
  },
}

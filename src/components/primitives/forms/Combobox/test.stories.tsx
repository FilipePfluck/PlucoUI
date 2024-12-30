import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, waitFor } from '@storybook/test'

import { Combobox } from '.'

type Story = StoryObj<typeof Combobox>

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: 'components/primitives/forms/Combobox/test',
}

export default meta

const data = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Vue', value: 'vue' },
]

// TODO - figure out why click events don't work on this story

export const ShouldOpenTheCombobox: Story = {
  args: {
    data,
    placeholder: 'Pick a framework',
  },
  play: async ({ canvasElement }) => {
    // Targetting the parentNode (body)
    // because the list is rendered inside a Portal
    // so usually canvasElement wouldn't contain it
    const canvas = within(canvasElement.parentNode as HTMLElement)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Space]')

    const list = canvas.getByRole('listbox')

    await waitFor(() => expect(list).toBeVisible())
  },
}

export const ShouldSelectAnOption: Story = {
  args: {
    data,
    placeholder: 'Pick a framework',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentNode as HTMLElement)

    await userEvent.tab()
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Enter]')

    const combobox = canvas.getByRole('combobox')

    await expect(combobox).toHaveValue('React')
  },
}

export const ShouldFilterOptions: Story = {
  args: {
    data,
    placeholder: 'Pick a framework',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentNode as HTMLElement)

    await userEvent.tab()
    await userEvent.keyboard('S')

    const solid = canvas.getByText('Solid')
    const svelte = canvas.getByText('Svelte')
    const react = canvas.queryByText('React')

    await waitFor(() => expect(solid).toBeVisible())
    await waitFor(() => expect(svelte).toBeVisible())
    await expect(react).toBe(null)
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { Combobox } from './index'

const meta: Meta<typeof Combobox> = {
  component: Combobox,
}

export default meta
type Story = StoryObj<typeof Combobox>

const data = [
  { label: 'React', value: 'react' },
  { label: 'React Native', value: 'react-native' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Vue', value: 'vue' },
]

export const Primary: Story = {
  args: {
    data,
    placeholder: 'Select a framework',
  },
}

export const Restrict: Story = {
  args: {
    data,
    allowCustomValue: false,
    openOnClick: true,
    placeholder: 'Select a framework',
    filterOptionsIfSelected: false,
  },
}

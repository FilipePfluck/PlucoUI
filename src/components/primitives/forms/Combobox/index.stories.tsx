import type { Meta, StoryObj } from '@storybook/react'
import { Combobox } from './index'

const meta: Meta<typeof Combobox> = {
  component: Combobox,
}

export default meta
type Story = StoryObj<typeof Combobox>

const data = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Vue', value: 'vue' },
]

export const Primary: Story = {
  render: () => <Combobox items={data} data={data} />,
}

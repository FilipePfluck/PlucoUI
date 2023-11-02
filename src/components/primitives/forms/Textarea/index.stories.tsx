import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './index'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  render: () => <TextArea placeholder="This is a textarea" />,
}

export const Disabled: Story = {
  render: () => <TextArea placeholder="I am disabled" disabled />,
}

export const Error: Story = {
  render: () => <TextArea placeholder="I have an error" aria-invalid={true} />,
}

import type { Meta, StoryObj } from '@storybook/react'

import { Editable } from './index'

const meta = {
  component: Editable,
} satisfies Meta<typeof Editable>

export default meta
type Story = StoryObj<typeof Editable>

export const EditableStory: Story = {
  args: {
    activationMode: 'dblclick',
    placeholder: 'Double click to edit',
  },
}

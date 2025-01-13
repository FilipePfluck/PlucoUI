import type { Meta, StoryObj } from '@storybook/react'

import { Colorpicker } from './index'

const meta = {
  component: Colorpicker,
} satisfies Meta<typeof Colorpicker>

export default meta
type Story = StoryObj<typeof Colorpicker>

export const ColorpickerStory: Story = {
  args: {},
}

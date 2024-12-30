import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

import { RadioGroup } from '.'
import { Box } from '@/styled-system/jsx'

type Story = StoryObj<typeof RadioGroup>

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'components/primitives/forms/RadioGroup/test',
}

export default meta

const items = [
  { id: 'r1', label: 'Default' },
  { id: 'r2', label: 'Comfortable' },
  { id: 'r3', label: 'Compact' },
]

export const ShouldSelectAnOption: Story = {
  args: { items },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const firstRadio = canvas.queryAllByRole('radio')[0]

    await userEvent.click(firstRadio)

    await expect(firstRadio).toHaveFocus()
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

export const ShouldBeAbleToChangeOption: Story = {
  args: { items },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const radios = canvas.queryAllByRole('radio')

    const firstRadio = radios[0]
    const secondRadio = radios[1]

    await userEvent.click(firstRadio)

    await expect(firstRadio).toHaveFocus()

    await userEvent.keyboard('[ArrowDown]')

    await expect(firstRadio).not.toHaveFocus()
    await expect(secondRadio).toHaveFocus()
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

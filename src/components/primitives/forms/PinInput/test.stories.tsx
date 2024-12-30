import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

import { PinInput } from '.'
import { Box } from '@/styled-system/jsx'

type Story = StoryObj<typeof PinInput>

const meta: Meta<typeof PinInput> = {
  component: PinInput,
  title: 'components/primitives/forms/PinInput/test',
}

export default meta

const placeholder = '0'

export const ShouldFillOTP: Story = {
  args: {
    placeholder,
    length: 3,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const [first, second, third] = canvas.queryAllByRole('textbox')

    await userEvent.tab()
    await userEvent.keyboard('123')

    await expect(first).toHaveValue('1')
    await expect(second).toHaveValue('2')
    await expect(third).toHaveValue('3')
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

export const ShouldChangeCorrectInput: Story = {
  args: {
    placeholder,
    length: 3,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const [first, second, third] = canvas.queryAllByRole('textbox')

    await userEvent.tab()
    await userEvent.keyboard('123')

    await expect(first).toHaveValue('1')
    await expect(second).toHaveValue('2')
    await expect(third).toHaveValue('3')

    await userEvent.keyboard('4')

    await expect(first).toHaveValue('1')
    await expect(second).toHaveValue('2')
    await expect(third).toHaveValue('4')
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

export const ShouldHandleDeletions: Story = {
  args: {
    placeholder,
    length: 3,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const [first, second, third] = canvas.queryAllByRole('textbox')

    await userEvent.tab()
    await userEvent.keyboard('123')

    await expect(first).toHaveValue('1')
    await expect(second).toHaveValue('2')
    await expect(third).toHaveValue('3')

    await userEvent.keyboard('[Backspace][Backspace][Backspace]')

    await expect(second).toHaveValue('')
    await expect(third).toHaveValue('')
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

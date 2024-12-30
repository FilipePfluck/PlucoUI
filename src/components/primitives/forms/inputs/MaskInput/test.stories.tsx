import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, fn, waitFor } from '@storybook/test'

import { MaskInput } from '.'
import { Box } from '@/styled-system/jsx'

type Story = StoryObj<typeof MaskInput>

const meta: Meta<typeof MaskInput> = {
  component: MaskInput,
  title: 'components/primitives/forms/inputs/MaskInput/test',
}

export default meta

const placeholder = '+00 (00) 0000-0000'
const mask = '+99 (99) 9999-9999'

const phoneNumber = '555100000000'
const expectedValue = '+55 (51) 0000-0000'
const emptyValue = '+__ (__) ____-____'
const incompleteNumber = '555100'
// const deletedNumber = '+55 (51) 0000-00__'
const expectedIncompleteNumber = '+55 (51) 00__-____'
const phoneNumberWithInvalidCharacters = '5551aaa00000000'
// const singleChangedCharacter = '+55 (51) 0000-0001'
const comicallyLongPhoneNumber = '5551000000000000000000000000000000000'

export const ShouldFillPhoneNumber: Story = {
  args: {
    placeholder,
    mask,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, phoneNumber, { delay: 50 })
    await expect(input).toHaveValue(expectedValue)
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

/* export const ShouldHandleBackspace: Story = {
  args: {
    placeholder,
    mask,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.click(input)
    await userEvent.keyboard(phoneNumber)
    await userEvent.keyboard('{Backspace>12}', { delay: 50 })
    await expect(input).toHaveValue(emptyValue)
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
} */

/* export const ShouldHandleDelete: Story = {
  args: {
    placeholder,
    mask,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.click(input)
    await userEvent.keyboard(phoneNumber)
    await userEvent.keyboard('{ArrowLeft>2}', { delay: 50 })
    await userEvent.keyboard('{Delete>2}', { delay: 50 })
    await expect(input).toHaveValue(deletedNumber)
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
} */

export const ShouldHandleIncompleteValues: Story = {
  args: {
    placeholder,
    mask,
    onBlur: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, incompleteNumber, { delay: 50 })
    await expect(input).toHaveValue(expectedIncompleteNumber)
    await userEvent.tab()
    await expect(input).not.toHaveFocus()
    await userEvent.tab({
      shift: true,
    })
    await expect(input).toHaveFocus()
    await waitFor(() => expect(input).toHaveValue(emptyValue))
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

export const ShouldHandleInvalidCharacters: Story = {
  args: {
    placeholder,
    mask,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, phoneNumberWithInvalidCharacters, { delay: 50 })
    await expect(input).toHaveValue(expectedValue)
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

export const ShouldHandleLongValues: Story = {
  args: {
    placeholder,
    mask,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, comicallyLongPhoneNumber, { delay: 50 })
    await expect(input).toHaveValue(expectedValue)
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

/* export const ShouldChangeCorrectCharacter: Story = {
  args: {
    placeholder,
    mask,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.click(input)
    await userEvent.keyboard(phoneNumber)
    await userEvent.keyboard('{ArrowLeft>1}', { delay: 50 })
    await userEvent.keyboard('1', { delay: 50 })
    await expect(input).toHaveValue(singleChangedCharacter)
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
} */

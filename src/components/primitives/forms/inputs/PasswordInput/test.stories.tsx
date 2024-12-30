import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

import { PasswordInput } from '.'
import { Box } from '@/styled-system/jsx'

type Story = StoryObj<typeof PasswordInput>

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  title: 'components/primitives/forms/inputs/PasswordInput/test',
}

export default meta

export const ShouldTogglePasswordVisibility: Story = {
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole('textbox')

    expect(input).toHaveProperty('type', 'password')

    const button = canvas.getByRole('button')

    await userEvent.click(button)

    expect(input).toHaveProperty('type', 'text')

    await userEvent.click(button)

    expect(input).toHaveProperty('type', 'password')
  },
}

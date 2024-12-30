import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

import { Switch } from '.'
import { Box } from '@/styled-system/jsx'

type Story = StoryObj<typeof Switch>

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'components/primitives/forms/Switch/test',
}

export default meta

export const ShouldTurnTheSwitch: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.tab()

    const switchElement = canvas.getByRole('switch')

    await expect(switchElement).toHaveFocus()

    await userEvent.keyboard('[Space]')

    await expect(switchElement).toHaveProperty('checked', true)

    await userEvent.keyboard('[Space]')

    await expect(switchElement).toHaveProperty('checked', false)
  },
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

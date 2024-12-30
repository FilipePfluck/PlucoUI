import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from './index'
import { Box } from '@/styled-system/jsx'

const meta: Meta<typeof Switch> = {
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const Primary: Story = {
  decorators: [
    (Story) => (
      <Box bg="bg.surface" p="8" rounded="md" shadow="md">
        <Story />
      </Box>
    ),
  ],
}

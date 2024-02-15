import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './index'
import { HStack, Stack } from '@/styled-system/jsx'

const meta: Meta<typeof Badge> = {
  component: Badge,
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  render: () => (
    <Stack gap="4">
      <HStack gap="4">
        <Badge intent="secondary">9+</Badge>
        <Badge intent="primary">9+</Badge>
        <Badge intent="danger">9+</Badge>
        <Badge intent="warning">9+</Badge>
        <Badge intent="success">9+</Badge>
        <Badge intent="info">9+</Badge>
      </HStack>
      <HStack gap="4">
        <Badge intent="secondary">Pluco UI</Badge>
        <Badge intent="primary">Pluco UI</Badge>
      </HStack>
    </Stack>
  ),
}

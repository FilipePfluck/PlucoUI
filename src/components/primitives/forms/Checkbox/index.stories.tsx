import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './index'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Checkbox id="test" label="I accept the terms and conditions" />
      <Checkbox id="test-2" label="I accept receiving emails" />
    </Flex>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './index'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const CheckboxStory: Story = {
  args: {
    label: 'I accept the terms and conditions',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    'aria-invalid': {
      control: 'boolean',
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Checkbox label="I accept the terms and conditions" />
      <Checkbox checked label="I accept the terms and conditions" />
      <Checkbox aria-invalid label="I accept the terms and conditions" />
      <Checkbox
        aria-invalid
        checked
        label="I accept the terms and conditions"
      />
      <Checkbox disabled label="I accept the terms and conditions" />
      <Checkbox disabled checked label="I accept the terms and conditions" />
    </Flex>
  ),
}

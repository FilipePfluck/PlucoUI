import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './index'
import { Flex } from '@/styled-system/jsx'
import { fn } from '@storybook/test'

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

const ButtonRow = ({ ...props }: ButtonProps) => {
  return (
    <Flex align="center" gap="2">
      <Button {...props} size="lg">
        Click me!
      </Button>
      <Button {...props} size="md">
        Click me!
      </Button>
      <Button {...props} size="sm">
        Click me!
      </Button>
    </Flex>
  )
}

export const ButtonStory: Story = {
  args: {
    children: 'Click me!',
    onClick: fn(),
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    intent: {
      options: ['primary', 'secondary', 'danger', 'ghost', 'link'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    full: {
      control: 'boolean',
    },
  },
}

export const AllVariants: Story = {
  render: () => {
    return (
      <Flex bg="bg.surface" p="8" gap="4" rounded="md" direction="column">
        <ButtonRow />
        <ButtonRow disabled />

        <ButtonRow intent="danger" />
        <ButtonRow intent="danger" disabled />

        <ButtonRow intent="secondary" />
        <ButtonRow intent="secondary" disabled />

        <ButtonRow intent="ghost" />
        <ButtonRow intent="ghost" disabled />

        <ButtonRow intent="link" />
        <ButtonRow intent="link" disabled />
      </Flex>
    )
  },
}

export { ButtonTests } from './index.test'

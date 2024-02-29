import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect, fn } from '@storybook/test'

import { Plus } from 'lucide-react'

import { IconButton, IconButtonProps } from './index'
import { Flex } from '@/styled-system/jsx'

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof IconButton>

const ButtonRow = ({ ...props }: Omit<IconButtonProps, 'aria-label'>) => {
  return (
    <Flex align="center" gap="2">
      <IconButton aria-label="add" {...props} size="lg">
        <Plus />
      </IconButton>
      <IconButton aria-label="add" {...props} size="md">
        <Plus />
      </IconButton>
      <IconButton aria-label="add" {...props} size="sm">
        <Plus />
      </IconButton>
    </Flex>
  )
}

export const IconButtonStory: Story = {
  args: {
    children: 'plus',
    onClick: fn(),
  },
  argTypes: {
    children: {
      options: 'plus',
      mapping: {
        plus: <Plus />,
      },
    },
    disabled: {
      control: 'boolean',
    },
    intent: {
      // TODO - see if there is a way to infer this from the component
      options: ['primary', 'secondary', 'danger', 'ghost', 'link'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
  },
}

export const AllVariants: Story = {
  render: () => {
    return (
      <Flex bg="bg.card" p="8" gap="4" rounded="md" direction="column">
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

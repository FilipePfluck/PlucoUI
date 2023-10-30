import type { Meta, StoryObj } from '@storybook/react'
import { Plus } from 'lucide-react'

import { IconButton } from './index'
import { Flex } from '@/styled-system/jsx'
import { ReactNode } from 'react'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
}

export default meta
type Story = StoryObj<typeof IconButton>

export const IconButtonStory: Story = {
  args: {
    children: <Plus />,
  },
  parameters: {
    controls: {
      include: ['size', 'intent'],
    },
  },
}

const StoryWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      direction="column"
      gap="4"
      align="center"
      justify="center"
      p="4"
      bg="bg.card"
      rounded="md"
      shadow="md"
    >
      {children}
    </Flex>
  )
}

export const Primary: Story = {
  render: () => (
    <StoryWrapper>
      <Flex gap="4" align="center" justify="center">
        <IconButton aria-label="add" size="sm">
          <Plus size={16} />
        </IconButton>
        <IconButton aria-label="add" size="md">
          <Plus size={16} />
        </IconButton>
        <IconButton aria-label="add" size="lg">
          <Plus size={16} />
        </IconButton>
        <IconButton aria-label="add" size="lg" disabled>
          <Plus size={16} />
        </IconButton>
      </Flex>
    </StoryWrapper>
  ),
}

export const Secondary: Story = {
  render: () => (
    <StoryWrapper>
      <Flex gap="4" align="center" justify="center">
        <IconButton intent="secondary" aria-label="add" size="sm">
          <Plus size={16} />
        </IconButton>
        <IconButton intent="secondary" aria-label="add" size="md">
          <Plus size={18} />
        </IconButton>
        <IconButton intent="secondary" aria-label="add" size="lg">
          <Plus size={24} />
        </IconButton>
        <IconButton intent="secondary" aria-label="add" size="lg" disabled>
          <Plus size={24} />
        </IconButton>
      </Flex>
    </StoryWrapper>
  ),
}

export const Danger: Story = {
  render: () => (
    <StoryWrapper>
      <Flex gap="4" align="center" justify="center">
        <IconButton intent="danger" aria-label="add" size="sm">
          <Plus size={16} />
        </IconButton>
        <IconButton intent="danger" aria-label="add" size="md">
          <Plus size={18} />
        </IconButton>
        <IconButton intent="danger" aria-label="add" size="lg">
          <Plus size={24} />
        </IconButton>
        <IconButton intent="danger" aria-label="add" size="lg" disabled>
          <Plus size={24} />
        </IconButton>
      </Flex>
    </StoryWrapper>
  ),
}

export const Ghost: Story = {
  render: () => (
    <StoryWrapper>
      <Flex gap="4" align="center" justify="center">
        <IconButton intent="ghost" aria-label="add" size="sm">
          <Plus size={16} />
        </IconButton>
        <IconButton intent="ghost" aria-label="add" size="md">
          <Plus size={18} />
        </IconButton>
        <IconButton intent="ghost" aria-label="add" size="lg">
          <Plus size={24} />
        </IconButton>
      </Flex>
    </StoryWrapper>
  ),
}

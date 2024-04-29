import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { FileUpload } from './index'
import { Box } from '@/styled-system/jsx'

const meta = {
  component: FileUpload,
} satisfies Meta<typeof FileUpload>

export default meta
type Story = StoryObj<typeof FileUpload>

const Centered = (StoryFn: StoryFn) => {
  return (
    <Box maxW="600px" w="full">
      <StoryFn />
    </Box>
  )
}

export const FileUploadStory: Story = {
  args: {},
  decorators: [Centered],
}

export const MultipleFileUploadStory: Story = {
  args: {
    maxFiles: 4,
  },
  decorators: [Centered],
}

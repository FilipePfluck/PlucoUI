import type { Meta, StoryObj } from '@storybook/react'

import { FileUpload } from './index'

const meta = {
  component: FileUpload,
} satisfies Meta<typeof FileUpload>

export default meta
type Story = StoryObj<typeof FileUpload>

export const FileUploadStory: Story = {
  args: {},
}

export const MultipleFileUploadStory: Story = {
  args: {
    maxFiles: 4,
  },
}

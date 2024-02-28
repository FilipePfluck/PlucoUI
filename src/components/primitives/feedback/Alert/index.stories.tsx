import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from './index'
import { XCircle } from 'lucide-react'
import { Stack } from '@/styled-system/jsx'

const meta: Meta<typeof Alert> = {
  component: Alert,
}

export default meta
type Story = StoryObj<typeof Alert>

export const Primary: Story = {
  render: () => (
    <Stack gap="4">
      <Alert
        title="This is a message"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Alert
        title="This is a message"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        intent="primary"
      />
      <Alert
        title="This is an error"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        icon={<XCircle />}
        intent="danger"
      />
    </Stack>
  ),
}

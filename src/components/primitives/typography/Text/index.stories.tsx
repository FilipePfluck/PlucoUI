import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './index'
import { Flex } from '@/styled-system/jsx'

const meta = {
  component: Text,
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>

export const TextStory: Story = {
  args: {
    children: 'Sphinx of black quartz, judge my vow',
  },
}

export const AllVariants: Story = {
  render: () => {
    return (
      <Flex direction="column" gap="2">
        <Text textStyle="headingXl">Sphinx of black quartz, judge my vow</Text>
        <Text textStyle="headingLg">Sphinx of black quartz, judge my vow</Text>
        <Text textStyle="headingMd">Sphinx of black quartz, judge my vow</Text>
        <Text textStyle="headingSm">Sphinx of black quartz, judge my vow</Text>
        <Text textStyle="headingXs">Sphinx of black quartz, judge my vow</Text>
        <Text textStyle="bodyXl">Sphinx of black quartz, judge my vow</Text>
        <Text textStyle="bodyLg">Sphinx of black quartz, judge my vow</Text>
        <Text textStyle="bodyMd">Sphinx of black quartz, judge my vow</Text>
        <Text textStyle="bodySm">Sphinx of black quartz, judge my vow</Text>
        <Text textStyle="bodyXs">Sphinx of black quartz, judge my vow</Text>
      </Flex>
    )
  },
}

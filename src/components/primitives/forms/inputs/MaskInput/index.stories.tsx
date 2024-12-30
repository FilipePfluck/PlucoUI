import type { Meta, StoryObj } from '@storybook/react'

import { MaskInput } from './index'
import { Box } from '@/styled-system/jsx'

const meta: Meta<typeof MaskInput> = {
  component: MaskInput,
}

export default meta
type Story = StoryObj<typeof MaskInput>

export const AllVariants: Story = {
  render: () => (
    <Box
      bg="bg.surface"
      p="4"
      rounded="md"
      shadow="md"
      display="flex"
      flexDir="column"
      gap="4"
    >
      <MaskInput placeholder="+00 (00) 0000-0000" mask="+99 (99) 9999-9999" />
      <MaskInput placeholder="000.000.000-00" mask="999.999.999-99" />
      <MaskInput placeholder="$99.99" mask="$99.99" />
      <MaskInput placeholder="01/01/2025" mask="99/99/9999" />
      <MaskInput placeholder="aaa" mask="aaa" />
    </Box>
  ),
}

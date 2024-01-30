'use client'

import { Combobox } from '@/components/primitives/forms/Combobox'
import { Box } from '@/styled-system/jsx'

export default function Home() {
  return (
    <Box
      w="full"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Combobox />
    </Box>
  )
}

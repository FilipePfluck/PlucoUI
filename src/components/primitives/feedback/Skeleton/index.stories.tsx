import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './index'
import { Box, Circle, HStack, Stack } from '@/styled-system/jsx'
import { useEffect, useState } from 'react'
import { Avatar } from '../../media/Avatar'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {
  render: () => (
    <Box w="96" p="4" rounded="lg">
      <HStack width="full" gap="4">
        <Skeleton borderRadius="full">
          <Circle size="20" />
        </Skeleton>
        <Stack gap="3.5" width="full">
          <Skeleton h="4" />
          <Skeleton h="4" width="80%" />
          <Skeleton h="4" width="60%" />
        </Stack>
      </HStack>
    </Box>
  ),
}

const WithDataSkeleton = () => {
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true)
    }, 2000)
  }, [])

  return (
    <Box w="60" p="4" rounded="lg">
      <HStack width="full" gap="4">
        <Skeleton isLoaded={hasLoaded} borderRadius="full">
          <Avatar
            src="https://avatars.githubusercontent.com/u/62773200?v=4"
            name="Filipe Pfluck"
          />
        </Skeleton>
        <Stack gap="3.5" width="full">
          <Skeleton isLoaded={hasLoaded} width="60%" h="4" my="6px">
            <p>Filipe Pfluck</p>
          </Skeleton>
          <Skeleton h="4" my="6px" isLoaded={hasLoaded}>
            <p>Software engineer</p>
          </Skeleton>
        </Stack>
      </HStack>
    </Box>
  )
}

export const WithData: Story = {
  render: WithDataSkeleton,
}

import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './index'
import { Box, Circle, HStack, Stack, styled } from '@/styled-system/jsx'
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

const TextStyles = () => {
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(false)
    }, 2000)
  }, [])

  return (
    <Stack gap="3.5" width="96">
      <Skeleton isLoaded={hasLoaded} variant="headingXl">
        <styled.p textStyle="headingXl">lorem ipsum</styled.p>
      </Skeleton>
      <Skeleton isLoaded={hasLoaded} variant="headingLg">
        <styled.p textStyle="headingLg">lorem ipsum</styled.p>
      </Skeleton>
      <Skeleton isLoaded={hasLoaded} variant="headingMd">
        <styled.p textStyle="headingMd">lorem ipsum</styled.p>
      </Skeleton>
      <Skeleton isLoaded={hasLoaded} variant="headingSm">
        <styled.p textStyle="headingSm">lorem ipsum</styled.p>
      </Skeleton>
      <Skeleton isLoaded={hasLoaded} variant="headingXs">
        <styled.p textStyle="headingXs">lorem ipsum</styled.p>
      </Skeleton>
      <Skeleton isLoaded={hasLoaded} variant="textXl">
        <styled.p textStyle="textXl">lorem ipsum</styled.p>
      </Skeleton>
      <Skeleton isLoaded={hasLoaded} variant="textLg">
        <styled.p textStyle="textLg">lorem ipsum</styled.p>
      </Skeleton>
      <Skeleton isLoaded={hasLoaded} variant="textMd">
        <styled.p textStyle="textMd">lorem ipsum</styled.p>
      </Skeleton>
      <Skeleton isLoaded={hasLoaded} variant="textSm">
        <styled.p textStyle="textSm">lorem ipsum</styled.p>
      </Skeleton>
      <Skeleton isLoaded={hasLoaded} variant="textXs">
        <styled.p textStyle="textXs">lorem ipsum</styled.p>
      </Skeleton>

      <Skeleton isLoaded={false} variant="textMd" fallbackNoOfLines={4}>
        <styled.p textStyle="textMd">lorem ipsum</styled.p>
      </Skeleton>
    </Stack>
  )
}

export const WithData: Story = {
  render: WithDataSkeleton,
}

export const TextStylesStory: Story = {
  render: TextStyles,
}

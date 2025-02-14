import { HoverCard } from '@ark-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { HoverCardContent } from '.'
import { Avatar } from '../../media/Avatar'
import { Flex } from '@/styled-system/jsx'
import { Text } from '../../typography/Text'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const ExampleHoverCard = () => {
  return (
    <HoverCard.Root positioning={{ gutter: 24 }}>
      <HoverCard.Trigger>
        <Avatar
          name="Filipe Pfluck"
          src="https://avatars.githubusercontent.com/u/62773200?v=4"
        />
      </HoverCard.Trigger>
      <HoverCardContent>
        <Flex gap="4" align="center">
          <Avatar
            size="lg"
            name="Filipe Pfluck"
            src="https://avatars.githubusercontent.com/u/62773200?v=4"
          />
          <Flex direction="column" gap="2">
            <Text textStyle="headingSm">Filipe Pfluck</Text>
            <Flex gap="2">
              <Link href="https://github.com/FilipePfluck">
                <FaGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/filipe-hebestreit-pfluck-9389a31a6/">
                <FaLinkedin />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </HoverCardContent>
    </HoverCard.Root>
  )
}

const meta: Meta<typeof ExampleHoverCard> = {
  component: ExampleHoverCard,
}

export default meta
type Story = StoryObj<typeof ExampleHoverCard>

export const Example: Story = {
  render: ExampleHoverCard,
}

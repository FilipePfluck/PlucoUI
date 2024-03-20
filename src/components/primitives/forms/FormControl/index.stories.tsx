import type { Meta, StoryObj } from '@storybook/react'

import { FormControl } from './index'
import { Input } from '../Input'
import { Lock, Mail } from 'lucide-react'
import { Flex } from '@/styled-system/jsx'
import { Button } from '../../buttons/Button'

const meta: Meta<typeof FormControl> = {
  component: FormControl,
}

export default meta
type Story = StoryObj<typeof FormControl>

export const Default: Story = {
  render: () => {
    return (
      <FormControl
        helperMessage="We will never share it"
        id="email"
        label="Email"
        isRequired
      >
        <Input
          placeholder="Email"
          icon={<Mail strokeWidth={1.5} size={16} />}
        />
      </FormControl>
    )
  },
}

export const WithError: Story = {
  render: () => {
    return (
      <FormControl
        errorMessage="Invalid Email"
        id="email"
        label="Email"
        isRequired
      >
        <Input
          placeholder="Email"
          icon={<Mail strokeWidth={1.5} size={16} />}
          aria-invalid
        />
      </FormControl>
    )
  },
}

export const Form: Story = {
  render: () => {
    return (
      <Flex direction="column" gap="2">
        <FormControl
          errorMessage="Email is required"
          id="email"
          label="Email"
          isRequired
        >
          <Input
            placeholder="Email"
            icon={<Mail strokeWidth={1.5} size={16} />}
            aria-invalid
          />
        </FormControl>
        <FormControl
          errorMessage="Password is required"
          id="password"
          label="Password"
          isRequired
        >
          <Input
            placeholder="Password"
            icon={<Lock strokeWidth={1.5} size={16} />}
            aria-invalid
          />
        </FormControl>
        <Button css={{ mt: '4' }} full>
          Log in
        </Button>
      </Flex>
    )
  },
}

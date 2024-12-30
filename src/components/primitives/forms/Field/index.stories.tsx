import type { Meta, StoryObj } from '@storybook/react'

import { Field } from './index'
import { Input } from '../inputs/Input'
import { Lock, Mail } from 'lucide-react'
import { Flex } from '@/styled-system/jsx'
import { Button } from '../buttons/Button'

const meta: Meta<typeof Field> = {
  component: Field,
}

export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  render: () => {
    return (
      <Field
        helperMessage="We will never share it"
        id="email"
        label="Email"
        isRequired
      >
        <Input
          placeholder="Email"
          startElement={<Mail strokeWidth={1.5} size={16} />}
        />
      </Field>
    )
  },
}

export const WithError: Story = {
  render: () => {
    return (
      <Field errorMessage="Invalid Email" id="email" label="Email" isRequired>
        <Input
          placeholder="Email"
          startElement={<Mail strokeWidth={1.5} size={16} />}
          aria-invalid
        />
      </Field>
    )
  },
}

export const Form: Story = {
  render: () => {
    return (
      <Flex direction="column" gap="2">
        <Field
          errorMessage="Email is required"
          id="email"
          label="Email"
          isRequired
        >
          <Input
            placeholder="Email"
            startElement={<Mail strokeWidth={1.5} size={16} />}
            aria-invalid
          />
        </Field>
        <Field
          errorMessage="Password is required"
          id="password"
          label="Password"
          isRequired
        >
          <Input
            placeholder="Password"
            startElement={<Lock strokeWidth={1.5} size={16} />}
            aria-invalid
          />
        </Field>
        <Button css={{ mt: '4' }} full>
          Log in
        </Button>
      </Flex>
    )
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

import { Steps } from '.'

type Story = StoryObj<typeof Steps>

const meta: Meta<typeof Steps> = {
  component: Steps,
  title: 'components/primitives/pagination/Steps/test',
  args: {},
}

export default meta

const items = [
  { value: 'first', title: 'First', description: 'Contact Info' },
  { value: 'second', title: 'Second', description: 'Date & Time' },
  { value: 'third', title: 'Third', description: 'Select Rooms' },
]

export const ShouldNavigate: Story = {
  args: { items },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const firstStep = canvas.getByRole('tab', { name: 'First' })

    expect(firstStep).toHaveAttribute('aria-selected', 'true')

    const nextStepButton = canvas.getByRole('button', { name: 'Next' })

    await userEvent.click(nextStepButton)

    const secondStep = canvas.getByRole('tab', { name: 'Second' })

    expect(secondStep).toHaveAttribute('aria-selected', 'true')

    await userEvent.click(nextStepButton)

    const thirdStep = canvas.getByRole('tab', { name: 'Third' })

    expect(thirdStep).toHaveAttribute('aria-selected', 'true')
  },
}

export const ShouldCompleteSteps: Story = {
  args: { items },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const nextStepButton = canvas.getByRole('button', { name: 'Next' })

    await userEvent.click(nextStepButton)
    await userEvent.click(nextStepButton)
    await userEvent.click(nextStepButton)

    const completeMessage =
      'Steps Complete - Thank you for filling out the form!'

    const completeMessageElement = canvas.getByText(completeMessage)

    expect(completeMessageElement).toBeVisible()
  },
}

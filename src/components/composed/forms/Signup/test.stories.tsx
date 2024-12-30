import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, fn, expect, waitFor } from '@storybook/test'

import { Signup } from '.'
import { messages } from './schema'

type Story = StoryObj<typeof Signup>

const meta: Meta<typeof Signup> = {
  component: Signup,
  title: 'components/composed/forms/Signup/test',
  args: {
    onSubmit: fn(),
  },
}

export default meta

const username = 'JoeDoe'
const email = 'joedoe@example.com'
const incompleteEmail = 'joedoe@'
const password = '123123123'
const incompletePassword = '123'

export const ShouldFillFormCorrectly: Story = {
  args: {},
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const usernameInput = canvas.getByRole('textbox', { name: 'Username' })
    await userEvent.type(usernameInput, username)
    const emailInput = canvas.getByRole('textbox', { name: 'E-mail' })
    await userEvent.type(emailInput, email)
    const passwordInput = canvas.getByRole('textbox', { name: 'Password' })
    await userEvent.type(passwordInput, password)
    const confirmPasswordInput = canvas.getByRole('textbox', {
      name: 'Confirm password',
    })
    await userEvent.type(confirmPasswordInput, password)

    const termsCheckbox = canvas.getByRole('checkbox')
    await userEvent.click(termsCheckbox)

    const submitButton = canvas.getByRole('button', { name: 'Sign up' })
    await userEvent.click(submitButton)

    await expect(args.onSubmit).toHaveBeenCalled()
  },
}

export const ShouldNotSubmitAnEmptyForm: Story = {
  args: {},
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const submitButton = canvas.getByRole('button', { name: 'Sign up' })
    await userEvent.click(submitButton)

    await expect(args.onSubmit).not.toHaveBeenCalled()

    const usernameError = canvas.getByText(messages.nameRequired)
    const emailError = canvas.getByText(messages.emailRequired)
    const passwordError = canvas.getByText(messages.passwordRequired)
    const confirmPasswordError = canvas.getByText(
      messages.confirmPasswordRequired,
    )
    const termsError = canvas.getByText(messages.termsRequired)

    await waitFor(() => expect(usernameError).toBeVisible())
    await waitFor(() => expect(emailError).toBeVisible())
    await waitFor(() => expect(passwordError).toBeVisible())
    await waitFor(() => expect(confirmPasswordError).toBeVisible())
    await waitFor(() => expect(termsError).toBeVisible())
  },
}

export const ShouldValidateEmail: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByRole('textbox', { name: 'E-mail' })
    await userEvent.type(emailInput, incompleteEmail)

    await userEvent.tab()

    const emailError = canvas.getByText(messages.emailInvalid)

    await waitFor(() => expect(emailError).toBeVisible())
  },
}

export const ShouldValidatePassword: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const passwordInput = canvas.getByRole('textbox', { name: 'Password' })
    await userEvent.type(passwordInput, incompletePassword)

    await userEvent.tab()

    const passwordError = canvas.getByText(messages.passwordRequired)

    await waitFor(() => expect(passwordError).toBeVisible())
  },
}

export const ShouldValidateConfirmPassword: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const passwordInput = canvas.getByRole('textbox', { name: 'Password' })
    await userEvent.type(passwordInput, password)

    const confirmPasswordInput = canvas.getByRole('textbox', {
      name: 'Confirm password',
    })
    await userEvent.click(confirmPasswordInput)
    await userEvent.tab()

    const passwordError = canvas.getByText(messages.confirmPasswordRequired)

    await waitFor(() => expect(passwordError).toBeVisible())

    await userEvent.type(confirmPasswordInput, incompletePassword)
    await userEvent.tab()

    const incorrectPasswordError = canvas.getByText(
      messages.confirmPasswordInvalid,
    )

    await waitFor(() => expect(incorrectPasswordError).toBeVisible())
  },
}

export const ShouldWaitForBlurToValidate: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    let usernameError = canvas.queryByText(messages.nameRequired)
    await expect(usernameError).toBeNull()

    const usernameInput = canvas.getByRole('textbox', { name: 'Username' })
    await userEvent.click(usernameInput)

    await expect(usernameError).toBeNull()

    await userEvent.tab()

    usernameError = canvas.getByText(messages.nameRequired)

    await waitFor(() => expect(usernameError).toBeVisible())
  },
}

export const ShouldDismissTheErrorUponFix: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const usernameInput = canvas.getByRole('textbox', { name: 'Username' })

    await userEvent.click(usernameInput)

    await userEvent.tab()

    const nameError = canvas.getByText(messages.nameRequired)
    await waitFor(() => expect(nameError).toBeVisible())

    await userEvent.type(usernameInput, username)
    await waitFor(() => expect(nameError).not.toBeVisible())
  },
}

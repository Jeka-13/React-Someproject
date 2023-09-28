import { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {}
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

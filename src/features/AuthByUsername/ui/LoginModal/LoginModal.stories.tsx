import { Meta, StoryObj } from '@storybook/react'
import { LoginModal } from 'features/AuthByUsername'

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {}
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const IsOpened: Story = {
  args: {
    isOpen: true
  }
}

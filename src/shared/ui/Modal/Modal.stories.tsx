import { Meta, StoryObj } from '@storybook/react'
import { Modal } from 'shared/ui/Modal/Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {}
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Closed: Story = {
  args: {
    children: 'Text'
  }
}

export const Opened: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, veniam?'
  }
}

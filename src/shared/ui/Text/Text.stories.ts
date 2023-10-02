import { Meta, StoryObj } from '@storybook/react'
import { Text, TextTheme } from 'shared/ui/Text/Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  argTypes: {}
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Text',
    text: 'lorem asfasfasfsafsafas'
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Text'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'lorem asfasfasfsafsafas'
  }
}

export const ErrorText: Story = {
  args: {
    title: 'Text',
    text: 'lorem asfasfasfsafsafas',
    theme: TextTheme.ERROR
  }
}

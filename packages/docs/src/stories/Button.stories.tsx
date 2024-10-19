import { Button, ButtonProps } from '@messier-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

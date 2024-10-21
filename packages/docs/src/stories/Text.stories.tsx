import { Text, TextProps } from '@messier-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nemo totam odit quo mollitia, quas minima, esse officia nam quasi molestias nulla suscipit quisquam optio unde adipisci ratione vero in.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'asdad',
    as: 'strong',
  },
}

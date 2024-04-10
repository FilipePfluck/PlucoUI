import type { Meta, StoryObj } from '@storybook/react'

import { Carousel } from './index'

const meta = {
  component: Carousel,
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof Carousel>

export const CarouselStory: Story = {
  args: {
    images: [
      'https://tinyurl.com/5b6ka8jd',
      'https://tinyurl.com/7rmccdn5',
      'https://tinyurl.com/59jxz9uu',
      'https://tinyurl.com/6jurv23t',
      'https://tinyurl.com/yp4rfum7',
    ],
  },
}

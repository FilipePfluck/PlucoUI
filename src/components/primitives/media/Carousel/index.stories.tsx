import type { Meta, StoryObj } from '@storybook/react'

import { Carousel } from './index'

const meta = {
  component: Carousel,
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof Carousel>

const images = [
  { src: 'https://tinyurl.com/5b6ka8jd', alt: 'Sea at sunset' },
  { src: 'https://tinyurl.com/7rmccdn5', alt: 'Top view of a beach' },
  { src: 'https://tinyurl.com/59jxz9uu', alt: 'Beautiful island' },
  { src: 'https://tinyurl.com/6jurv23t', alt: 'Shore' },
  { src: 'https://tinyurl.com/yp4rfum7', alt: 'Coastal vegetation' },
]

export const CarouselStory: Story = {
  args: {
    images,
  },
}

export const TwoPerPage: Story = {
  args: {
    slidesPerPage: 2,
    spacing: '16px',
    images,
  },
}

export const OnePerMove: Story = {
  args: {
    slidesPerPage: 2,
    slidesPerMove: 1,
    spacing: '16px',
    images,
  },
}

export const ThreePerPage: Story = {
  args: {
    slidesPerPage: 3,
    slidesPerMove: 1,
    spacing: '16px',
    images,
  },
}

export const WithDrag: Story = {
  args: {
    allowMouseDrag: true,
    inViewThreshold: 0.3,
    images,
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

import { Carousel } from '.'

type Story = StoryObj<typeof Carousel>

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'components/primitives/media/Carousel/test',
  args: {},
}

export default meta

const images = [
  { src: 'https://tinyurl.com/5b6ka8jd', alt: 'First image' },
  { src: 'https://tinyurl.com/7rmccdn5', alt: 'Second image' },
  { src: 'https://tinyurl.com/59jxz9uu', alt: 'Third image' },
  { src: 'https://tinyurl.com/6jurv23t', alt: 'Fourth image' },
  { src: 'https://tinyurl.com/yp4rfum7', alt: 'Fivth image' },
]

export const ShouldSwitchSlides: Story = {
  args: { images },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const firstImage = canvas.getByAltText('First image')

    expect(firstImage).toBeVisible()

    const nextTrigger = canvas.getByRole('button', { name: 'Next slide' })

    await userEvent.click(nextTrigger)

    const secondImage = canvas.getByAltText('Second image')

    expect(secondImage).toBeVisible()
  },
}

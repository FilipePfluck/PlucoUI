import { CarouselRootProps } from '@ark-ui/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { IconButton } from '../../forms/buttons/IconButton'

import S, { Image } from './styles'

type Image = {
  src: string
  alt?: string
}

type CarouselProps = CarouselRootProps & {
  images: Image[]
}

export const Carousel = ({ images }: CarouselProps) => {
  return (
    <S.Root>
      <S.Viewport>
        <S.ItemGroup>
          {images.map((image, index) => (
            <S.Item key={index} index={index}>
              <Image alt={image.alt || ''} src={image.src} />
            </S.Item>
          ))}
        </S.ItemGroup>
        <S.Control>
          <S.PrevTrigger asChild>
            <IconButton intent="link" aria-label="Previous slide">
              <ChevronLeft />
            </IconButton>
          </S.PrevTrigger>
          <S.IndicatorGroup>
            {images.map((_, index) => (
              <S.Indicator
                key={index}
                index={index}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </S.IndicatorGroup>
          <S.NextTrigger asChild>
            <IconButton intent="link" aria-label="Next slide">
              <ChevronRight />
            </IconButton>
          </S.NextTrigger>
        </S.Control>
      </S.Viewport>
    </S.Root>
  )
}

import { CarouselRootProps } from '@ark-ui/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { IconButton } from '../../buttons/IconButton'

import S, { Image } from './styles'

type CarouselProps = CarouselRootProps & {
  images: string[]
}

export const Carousel = ({ images }: CarouselProps) => {
  return (
    <S.Root>
      <S.Viewport>
        <S.ItemGroup>
          {images.map((image, index) => (
            <S.Item key={index} index={index}>
              <Image alt="" src={image} />
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
              <S.Indicator key={index} index={index} />
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

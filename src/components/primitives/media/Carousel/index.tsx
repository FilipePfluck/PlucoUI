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

export const Carousel = ({
  images,
  slidesPerMove = 'auto',
  slidesPerPage,
  spacing,
  ...props
}: CarouselProps) => {
  const nSlidesPerPage = slidesPerPage || 1
  const nSlidesPerMove =
    slidesPerMove === 'auto' ? nSlidesPerPage : slidesPerMove
  const totalSlides = images.length || 1

  console.log({ totalSlides, nSlidesPerPage, nSlidesPerMove, spacing })

  const amountOfPages =
    totalSlides <= nSlidesPerPage
      ? 1
      : Math.ceil((totalSlides - nSlidesPerPage) / nSlidesPerMove) + 1

  return (
    // page prop from Carousel.Root
    // conflicting with page prop from CSS
    // @ts-ignore
    <S.Root
      slidesPerMove={slidesPerMove}
      slidesPerPage={slidesPerPage}
      spacing={spacing}
      {...props}
    >
      <S.ItemGroup>
        {images.map((image, index) => (
          <S.Item
            {...(!spacing ? {} : { 'data-separated': true })}
            key={index}
            index={index}
          >
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
          {Array.from({ length: amountOfPages }).map((_, index) => (
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
    </S.Root>
  )
}

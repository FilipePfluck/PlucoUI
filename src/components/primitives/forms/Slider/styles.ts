import { styled } from '@/styled-system/jsx'
import { Slider } from '@ark-ui/react'

export const Root = styled(Slider.Root, {
  base: {
    display: 'flex',
    gap: '2',
    w: 'full',
    h: 'full',

    _horizontal: {
      flexDir: 'column',
    },
    _vertical: {
      flexDir: 'row',
    },
  },
})

export const Label = styled(Slider.Label, {})

export const ValueText = styled(Slider.ValueText, {})

export const Control = styled(Slider.Control, {
  base: {
    _horizontal: {
      w: 'full',
    },
    _vertical: {
      h: 'full',
    },
  },
})

export const Track = styled(Slider.Track, {
  base: {
    bg: 'border',

    rounded: 'full',
    display: 'flex',
    align: 'center',
    flex: 1,
    overflow: 'hidden',

    _horizontal: {
      w: 'full',
      h: '1',
    },
    _vertical: {
      w: '1',
      h: 'full',
    },
  },
})

export const Range = styled(Slider.Range, {
  base: {
    bg: 'brand',

    _horizontal: {
      h: 'full',
    },
    _vertical: {
      w: 'full',
    },
  },
})

export const Thumb = styled(Slider.Thumb, {
  base: {
    bg: 'bg.card',
    borderColor: 'brand',
    rounded: 'full',
    borderWidth: '2px',
    shadow: 'sm',
    zIndex: 1,
    w: '4',
    h: '4',
    outlineColor: 'border.ring',
    cursor: 'pointer',

    // 2px is half of 4px which is the size of the slider track
    _horizontal: {
      '--slider-thumb-transform': 'translate(-50%, calc(-50% - 2px))',
    },
    _vertical: {
      '--slider-thumb-transform': 'translate(calc(-50% + 2px), 50%)',
    },
  },
})

export const MarkerGroup = styled(Slider.MarkerGroup, {
  base: {
    mt: '1',
    zIndex: '0',
  },
})

export const Marker = styled(Slider.Marker, {
  base: {
    textStyle: 'textSm',
    color: 'fg.subtle',
    '--before-background': 'colors.fg',
    _before: {
      bg: 'white',
      content: "''",
      display: 'block',
      h: '1',
      w: '1',
      rounded: 'full',
      position: 'relative',
    },

    _horizontal: {
      _before: {
        left: '50%',
        transform: 'translateX(-50%)',
        mt: '-16px',
        mb: '12px',
      },
    },

    _vertical: {
      _before: {
        ml: '-12px',
        mb: '-12px',
      },
    },
  },
})

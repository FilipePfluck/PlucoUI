import { slideAnimation } from '@/panda/utils'
import { css } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Menu } from '@ark-ui/react'

const menuItemBaseStyles = css.raw({
  py: '1',
  px: '8',
  rounded: 'sm',
  cursor: 'pointer',
  _highlighted: {
    bg: 'brand',
    color: 'white',
  },
  '&[aria-expanded="true"]': {
    bg: 'bg.card.hovered',
    color: 'fg',
  },
  _hover: {
    bg: 'brand',
    color: 'white',
  },
  transition: '0.12s',
  position: 'relative',
})

export const Root = styled(Menu.Root, {})

export const Trigger = styled(Menu.Trigger, {})

export const ContextTrigger = styled(Menu.ContextTrigger, {})

export const Positioner = styled(Menu.Positioner, {})

export const Content = styled(Menu.Content, {
  base: {
    bg: 'bg.card',
    px: '2',
    py: '4',
    rounded: 'md',
    shadow: 'md',
    outline: 'none',

    display: 'flex',
    '&[hidden]': { display: 'none' },
    flexDir: 'column',
    gap: '4',

    ...slideAnimation,
  },
})

export const ItemGroup = styled(Menu.ItemGroup, {})

export const ItemGroupLabel = styled(Menu.ItemGroupLabel, {
  base: {
    textStyle: 'headingXs',
    color: 'fg',
    pl: '8',
    mb: '1',
  },
})

export const Item = styled(Menu.Item, {
  base: {
    ...menuItemBaseStyles,
  },
})

export const Separator = styled(Menu.Separator, {
  base: {
    h: '1px',
    w: 'full',
    bg: 'bg.card.hovered',
  },
})

export const TriggerItem = styled(Menu.TriggerItem, {
  base: {
    ...menuItemBaseStyles,
  },
})

export const OptionItem = styled(Menu.OptionItem, {
  base: {
    ...menuItemBaseStyles,
  },
})

export const OptionIndicator = styled('div', {
  base: {
    position: 'absolute',
    left: '2',
    top: '50%',
    transform: 'translateY(-50%)',
  },
})

export const Arrow = styled(Menu.Arrow, {
  base: {
    '--arrow-background': 'colors.bg.card',
    '--arrow-size': '10px',
  },
})

export const ArrowTip = styled(Menu.ArrowTip, {
  base: {
    rounded: 'xs',
  },
})

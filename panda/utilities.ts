import { UtilityConfig } from '@pandacss/types'
import { alignItemsValues, justifyContentValues } from './values'

type UtilityType = {
  extend: UtilityConfig
}

export const utilities: UtilityType = {
  extend: {
    focusRing: {
      values: ['outside', 'inside', 'mixed', 'none'],
      transform(value, { token }) {
        const focusRingColor = token('colors.border.ring')
        // eslint-disable-next-line
        const styles: Record<string, any> = {
          inside: {
            '--focus-ring-color': focusRingColor,
            '&:focus-visible': {
              outlineOffset: '0px',
              outlineWidth: 'var(--focus-ring-width, 1px)',
              outlineColor: 'var(--focus-ring-color)',
              outlineStyle: 'var(--focus-ring-style, solid)',
              borderColor: 'var(--focus-ring-color)',
            },
          },
          outside: {
            '--focus-ring-color': focusRingColor,
            '&:focus-visible': {
              outlineWidth: 'var(--focus-ring-width, 2px)',
              outlineOffset: 'var(--focus-ring-offset, 2px)',
              outlineStyle: 'var(--focus-ring-style, solid)',
              outlineColor: 'var(--focus-ring-color)',
            },
          },
          mixed: {
            '--focus-ring-color': focusRingColor,
            '&:focus-visible': {
              outlineWidth: 'var(--focus-ring-width, 3px)',
              outlineStyle: 'var(--focus-ring-style, solid)',
              outlineColor:
                'color-mix(in srgb, var(--focus-ring-color), transparent 60%)',
              borderColor: 'var(--focus-ring-color)',
            },
          },
          none: {
            '&:focus-visible': {
              outline: 'none',
            },
          },
        }

        return styles[value] ?? {}
      },
    },
    focusWithingRing: {
      values: ['outside', 'inside', 'mixed', 'none'],
      transform(value, { token }) {
        const focusRingColor = token('colors.border.ring')
        // eslint-disable-next-line
        const styles: Record<string, any> = {
          inside: {
            '--focus-ring-color': focusRingColor,
            '&:has(:focus-visible)': {
              outlineOffset: '0px',
              outlineWidth: 'var(--focus-ring-width, 1px)',
              outlineColor: 'var(--focus-ring-color)',
              outlineStyle: 'var(--focus-ring-style, solid)',
              borderColor: 'var(--focus-ring-color)',
            },
          },
          outside: {
            '--focus-ring-color': focusRingColor,
            '&:has(:focus-visible)': {
              outlineWidth: 'var(--focus-ring-width, 2px)',
              outlineOffset: 'var(--focus-ring-offset, 2px)',
              outlineStyle: 'var(--focus-ring-style, solid)',
              outlineColor: 'var(--focus-ring-color)',
            },
          },
          mixed: {
            '--focus-ring-color': focusRingColor,
            '&:has(:focus-visible)': {
              outlineWidth: 'var(--focus-ring-width, 3px)',
              outlineStyle: 'var(--focus-ring-style, solid)',
              outlineColor:
                'color-mix(in srgb, var(--focus-ring-color), transparent 60%)',
              borderColor: 'var(--focus-ring-color)',
            },
          },
          none: {
            '&:has(:focus-visible)': {
              outline: 'none',
            },
          },
        }

        return styles[value] ?? {}
      },
    },

    focusRingColor: {
      values: 'colors',
      // eslint-disable-next-line
      transform(value, { utils }: any) {
        const prop = '--focus-ring-color'
        const mix = utils.colorMix(value)
        if (mix.invalid) return { [prop]: value }
        const cssVar = '--mix-' + prop
        return {
          [cssVar]: mix.value,
          [prop]: `var(${cssVar}, ${mix.color})`,
        }
      },
    },
    focusRingOffset: {
      values: 'spacing',
      transform: (v) => ({ '--focus-ring-offset': v }),
    },
    focusRingWidth: {
      values: 'borderWidths',
      property: 'outlineWidth',
      transform: (v) => ({ '--focus-ring-width': v }),
    },
    focusRingStyle: {
      values: 'borderStyles',
      property: 'outlineStyle',
      transform: (v) => ({ '--focus-ring-style': v }),
    },

    truncate: {
      className: 'truncate',
      values: { type: 'boolean' },
      transform(value: boolean) {
        if (!value) return {}
        return {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }
      },
    },
    borderX: {
      values: { type: 'string' },
      shorthand: 'bx',
      transform(value: string) {
        return {
          borderLeft: value,
          borderRight: value,
        }
      },
    },
    borderY: {
      values: { type: 'string' },
      shorthand: 'by',
      transform(value: string) {
        return {
          borderTop: value,
          borderBottom: value,
        }
      },
    },
    borderTop: {
      values: { type: 'string' },
      shorthand: 'bt',
      transform(value: string) {
        return {
          borderTop: value,
        }
      },
    },
    borderRight: {
      values: { type: 'string' },
      shorthand: 'br',
      transform(value: string) {
        return {
          borderRight: value,
        }
      },
    },
    borderBottom: {
      values: { type: 'string' },
      shorthand: 'bb',
      transform(value: string) {
        return {
          borderBottom: value,
        }
      },
    },
    borderLeft: {
      values: { type: 'string' },
      shorthand: 'bl',
      transform(value: string) {
        return {
          borderLeft: value,
        }
      },
    },
    align: {
      values: alignItemsValues,
      transform(value: string) {
        return {
          alignItems: value,
        }
      },
    },
    justify: {
      values: justifyContentValues,
      transform(value: string) {
        return {
          justifyContent: value,
        }
      },
    },
    center: {
      values: ['flex', 'absolute', 'absoluteY', 'absoluteX'],
      transform(value: string) {
        switch (value) {
          case 'flex':
            return {
              alignItems: 'center',
              justifyContent: 'center',
            }
          case 'absolute':
            return {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }
          case 'absoluteY':
            return {
              top: '50%',
              left: '50%',
              transform: 'translateY(-50%)',
            }
          case 'absoluteX':
            return {
              top: '50%',
              left: '50%',
              transform: 'translateX(-50%)',
            }
        }
      },
    },
    gridColumns: {
      values: { type: 'string' },
      transform(value: string) {
        return {
          gridTemplateColumns: value,
        }
      },
    },
    gridRows: {
      values: { type: 'string' },
      transform(value: string) {
        return {
          gridTemplateRows: value,
        }
      },
    },
    gridAreas: {
      values: { type: 'string' },
      transform(value: string) {
        return {
          gridTemplateAreas: value,
        }
      },
    },
    iconColor: {
      values: 'colors',
      transform(value: string) {
        return {
          '& svg': { stroke: value },
        }
      },
    },
    iconSize: {
      values: { type: 'string' },
      transform(value: string) {
        return {
          '& svg': { height: value, width: value },
        }
      },
    },

    gradientBorder: {
      values: { type: 'string' },
      transform(value: string) {
        return {
          '--gradient-border-background-image': value,
          '--after-inset':
            'calc(var(--gradient-border-width, 2px) + var(--gradient-border-offset, 0px) + 1px)',

          '&::after': {
            content: '""',
            display: 'inline-block',
            position: 'absolute',
            inset: 'calc(var(--after-inset) * -1)',
            pointerEvents: 'none',
            padding: 'var(--gradient-border-width)',
            borderRadius: 'var(--gradient-border-radius, inherit)',

            backgroundImage: 'var(--gradient-border-background-image)',
            mask: 'linear-gradient(#000 0 0) exclude, linear-gradient(#000 0 0) content-box',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          },
        }
      },
    },

    gradientBorderWidth: {
      values: { type: 'string' },
      transform(value: string) {
        return {
          '--gradient-border-width': value,
        }
      },
    },

    gradientBorderOffset: {
      values: { type: 'string' },
      transform(value: string) {
        return {
          '--gradient-border-offset': value,
        }
      },
    },

    gradientBorderRadius: {
      values: { type: 'string' },
      transform(value: string) {
        return {
          '--gradient-border-radius': value,
        }
      },
    },
  },
}

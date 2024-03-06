import { alignItemsValues, justifyContentValues } from './values'

export const utilities = {
  extend: {
    focusRing: {
      values: ['1px', '2px', '4px'],
      shorthand: 'ring',
      transform(value: string) {
        return {
          outline: 'none',
          '&:focus-visible': {
            outlineWidth: value,
            outlineStyle: 'solid',
            outlineColor: 'token(colors.border.ring)',
          },
        }
      },
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
      values: { type: 'string' },
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
  },
}

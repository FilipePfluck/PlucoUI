import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      app: {
        value: {
          base: '{colors.mauve.1}',
          _dark: '{colors.mauveDark.1}',
        },
      },
      surface: {
        DEFAULT: {
          value: {
            base: '{colors.mauve.2}',
            _dark: '{colors.mauveDark.2}',
          },
        },
        hovered: {
          value: {
            base: '{colors.mauve.3}',
            _dark: '{colors.mauveDark.3}',
          },
        },
        disabled: {
          value: {
            base: '{colors.mauve.2/40}',
            _dark: '{colors.mauveDark.2/40}',
          },
        },
      },
      subtle: {
        value: {
          base: '{colors.mauve.6/3}',
          _dark: '{colors.mauveDark.6/3}',
        },
      },
      danger: {
        DEFAULT: {
          value: {
            base: '{colors.red.5}',
            _dark: '{colors.redDark.5}',
          },
        },
        hovered: {
          value: {
            base: '{colors.red.6}',
            _dark: '{colors.redDark.6}',
          },
        },
        disabled: {
          value: {
            base: '{colors.red.5/40}',
            _dark: '{colors.redDark.5/40}',
          },
        },
        userSelect: {
          value: {
            base: '{colors.red.5/20}',
            _dark: '{colors.redDark.5/20}',
          },
        },
        subtle: {
          value: {
            base: '{colors.red.7/6}',
            _dark: '{colors.redDark.7/6}',
          },
        },
      },
      success: {
        DEFAULT: {
          value: {
            base: '{colors.green.5}',
            _dark: '{colors.greenDark.5}',
          },
        },
        hovered: {
          value: {
            base: '{colors.green.6}',
            _dark: '{colors.greenDark.6}',
          },
        },
        disabled: {
          value: {
            base: '{colors.green.5/40}',
            _dark: '{colors.greenDark.5/40}',
          },
        },
        userSelect: {
          value: {
            base: '{colors.green.5/20}',
            _dark: '{colors.greenDark.5/20}',
          },
        },
        subtle: {
          value: {
            base: '{colors.green.7/6}',
            _dark: '{colors.greenDark.7/6}',
          },
        },
      },
      brand: {
        DEFAULT: {
          value: {
            base: '{colors.violet.5}',
            _dark: '{colors.violetDark.5}',
          },
        },
        hovered: {
          value: {
            base: '{colors.violet.6}',
            _dark: '{colors.violetDark.6}',
          },
        },
        disabled: {
          value: {
            base: '{colors.violet.5/40}',
            _dark: '{colors.violetDark.5/40}',
          },
        },
        userSelect: {
          value: {
            base: '{colors.violet.5/20}',
            _dark: '{colors.violetDark.5/20}',
          },
        },
        subtle: {
          value: {
            base: '{colors.violet.6/12}',
            _dark: '{colors.violetDark.6/12}',
          },
        },
      },
    },
    fg: {
      DEFAULT: {
        value: {
          base: '{colors.mauve.6}',
          _dark: '{colors.mauveDark.6}',
        },
      },
      important: {
        value: {
          base: '{colors.mauve.7}',
          _dark: '{colors.mauveDark.7}',
        },
      },
      unimportant: {
        value: {
          base: '{colors.mauve.5}',
          _dark: '{colors.mauveDark.5}',
        },
      },
      disabled: {
        value: {
          base: '{colors.mauve.7/40}',
          _dark: '{colors.mauveDark.7/50}',
        },
      },
      danger: {
        value: {
          base: '{colors.red.7}',
          _dark: '{colors.redDark.7}',
        },
      },
      success: {
        value: {
          base: '{colors.green.7}',
          _dark: '{colors.greenDark.7}',
        },
      },
      brand: {
        value: {
          base: '{colors.violet.7}',
          _dark: '{colors.violetDark.7}',
        },
      },
    },
    border: {
      DEFAULT: {
        value: {
          base: '{colors.mauve.4}',
          _dark: '{colors.mauveDark.4}',
        },
      },
      ring: {
        value: {
          base: '{colors.violet.5/60}',
          _dark: '{colors.violetDark.5/60}',
        },
      },
      subtle: {
        value: {
          base: '{colors.mauve.7/12}',
          _dark: '{colors.mauveDark.7/12}',
        },
      },
      disabled: {
        value: {
          base: '{colors.mauve.4/40}',
          _dark: '{colors.mauveDark.4/40}',
        },
      },
      danger: {
        DEFAULT: {
          value: {
            base: '{colors.red.5}',
            _dark: '{colors.redDark.5}',
          },
        },
        subtle: {
          value: {
            base: '{colors.red.7/20}',
            _dark: '{colors.redDark.7/20}',
          },
        },
      },
      success: {
        DEFAULT: {
          value: {
            base: '{colors.green.5}',
            _dark: '{colors.greenDark.5}',
          },
        },
        subtle: {
          value: {
            base: '{colors.green.7/20}',
            _dark: '{colors.greenDark.7/20}',
          },
        },
      },
      brand: {
        DEFAULT: {
          value: {
            base: '{colors.violet.5}',
            _dark: '{colors.violetDark.5}',
          },
        },
        subtle: {
          value: {
            base: '{colors.violet.7/15}',
            _dark: '{colors.violetDark.7/20}',
          },
        },
      },
    },
  },
})

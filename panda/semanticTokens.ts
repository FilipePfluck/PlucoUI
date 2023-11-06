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
      card: {
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
      },
      component: {
        DEFAULT: {
          value: {
            base: '{colors.mauve.4}',
            _dark: '{colors.mauveDark.4}',
          },
        },
        hovered: {
          value: {
            base: '{colors.mauve.5}',
            _dark: '{colors.mauveDark.5}',
          },
        },
      },
      disabled: {
        DEFAULT: {
          value: {
            base: '{colors.mauve.8}',
            _dark: '{colors.mauveDark.8}',
          },
        },
        hovered: {
          value: {
            base: '{colors.mauve.9}',
            _dark: '{colors.mauveDark.9}',
          },
        },
      },
      brand: {
        DEFAULT: {
          value: {
            base: '{colors.violet.8}',
            _dark: '{colors.violetDark.8}',
          },
        },
        hovered: {
          value: {
            base: '{colors.violet.9}',
            _dark: '{colors.violetDark.9}',
          },
        },
        subtle: {
          value: {
            base: '{colors.violet.5}',
            _dark: '{colors.violetDark.5}',
          },
        },
      },
      info: {
        DEFAULT: {
          value: {
            base: '{colors.blue.8}',
            _dark: '{colors.blueDark.8}',
          },
        },
        hovered: {
          value: {
            base: '{colors.blue.9}',
            _dark: '{colors.blueDark.9}',
          },
        },
        subtle: {
          value: {
            base: '{colors.blue.5}',
            _dark: '{colors.blueDark.5}',
          },
        },
      },
      success: {
        DEFAULT: {
          value: {
            base: '{colors.green.8}',
            _dark: '{colors.greenDark.8}',
          },
        },
        hovered: {
          value: {
            base: '{colors.green.9}',
            _dark: '{colors.greenDark.9}',
          },
        },
        subtle: {
          value: {
            base: '{colors.green.5}',
            _dark: '{colors.greenDark.5}',
          },
        },
      },
      warning: {
        DEFAULT: {
          value: {
            base: '{colors.yellow.8}',
            _dark: '{colors.yellowDark.8}',
          },
        },
        hovered: {
          value: {
            base: '{colors.yellow.9}',
            _dark: '{colors.yellowDark.9}',
          },
        },
      },
      danger: {
        DEFAULT: {
          value: {
            base: '{colors.red.8}',
            _dark: '{colors.redDark.8}',
          },
        },
        hovered: {
          value: {
            base: '{colors.red.9}',
            _dark: '{colors.redDark.9}',
          },
        },
        subtle: {
          value: {
            base: '{colors.red.5}',
            _dark: '{colors.redDark.5}',
          },
        },
      },
    },
    fg: {
      DEFAULT: {
        value: {
          base: '{colors.mauve.12}',
          _dark: '{colors.mauveDark.12}',
        },
      },
      subtle: {
        value: {
          base: '{colors.mauve.11}',
          _dark: '{colors.mauveDark.11}',
        },
      },
      muted: {
        value: {
          base: '{colors.mauve.10}',
          _dark: '{colors.mauveDark.10}',
        },
      },
      brand: {
        DEFAULT: {
          value: {
            base: '{colors.violet.12}',
            _dark: '{colors.violetDark.12}',
          },
        },
        subtle: {
          value: {
            base: '{colors.violet.11}',
            _dark: '{colors.violetDark.11}',
          },
        },
      },
      success: {
        DEFAULT: {
          value: {
            base: '{colors.green.12}',
            _dark: '{colors.greenDark.12}',
          },
        },
        subtle: {
          value: {
            base: '{colors.green.11}',
            _dark: '{colors.greenDark.11}',
          },
        },
      },
      info: {
        DEFAULT: {
          value: {
            base: '{colors.blue.12}',
            _dark: '{colors.blueDark.12}',
          },
        },
        subtle: {
          value: {
            base: '{colors.blue.11}',
            _dark: '{colors.blueDark.11}',
          },
        },
      },
      warning: {
        DEFAULT: {
          value: {
            base: '{colors.yellow.12}',
            _dark: '{colors.yellowDark.12}',
          },
        },
        subtle: {
          value: {
            base: '{colors.yellow.11}',
            _dark: '{colors.yellowDark.11}',
          },
        },
      },
      danger: {
        DEFAULT: {
          value: {
            base: '{colors.red.12}',
            _dark: '{colors.redDark.12}',
          },
        },
        subtle: {
          value: {
            base: '{colors.red.11}',
            _dark: '{colors.redDark.11}',
          },
        },
      },
    },
    border: {
      DEFAULT: {
        value: {
          base: '{colors.mauve.6}',
          _dark: '{colors.mauveDark.6}',
        },
      },
      brand: {
        value: {
          base: '{colors.violet.8}',
          _dark: '{colors.violetDark.8}',
        },
      },
      danger: {
        value: {
          base: '{colors.red.8}',
          _dark: '{colors.redDark.8}',
        },
      },
      ring: {
        value: {
          base: '{colors.blue.7}',
          _dark: '{colors.blueDark.7}',
        },
      },
    },
  },
})

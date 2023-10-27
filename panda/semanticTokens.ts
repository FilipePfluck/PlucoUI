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
      component: {
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
      brand: {
        DEFAULT: {
          value: {
            base: '{colors.violet.6}',
            _dark: '{colors.violetDark.6}',
          },
        },
        hovered: {
          value: {
            base: '{colors.violet.7}',
            _dark: '{colors.violetDark.7}',
          },
        },
      },
      danger: {
        DEFAULT: {
          value: {
            base: '{colors.red.6}',
            _dark: '{colors.redDark.6}',
          },
        },
        hovered: {
          value: {
            base: '{colors.red.7}',
            _dark: '{colors.redDark.7}',
          },
        },
      },
    },
    fg: {
      DEFAULT: {
        value: {
          base: '{colors.mauve.10}',
          _dark: '{colors.mauveDark.10}',
        },
      },
      subtle: {
        value: {
          base: '{colors.mauve.9}',
          _dark: '{colors.mauveDark.9}',
        },
      },
      muted: {
        value: {
          base: '{colors.mauve.8}',
          _dark: '{colors.mauveDark.8}',
        },
      },
      brand: {
        DEFAULT: {
          value: {
            base: '{colors.violet.10}',
            _dark: '{colors.violetDark.10}',
          },
        },
        subtle: {
          value: {
            base: '{colors.violet.9}',
            _dark: '{colors.violetDark.9}',
          },
        },
      },
      success: {
        DEFAULT: {
          value: {
            base: '{colors.green.10}',
            _dark: '{colors.greenDark.10}',
          },
        },
        subtle: {
          value: {
            base: '{colors.green.9}',
            _dark: '{colors.greenDark.9}',
          },
        },
      },
      info: {
        DEFAULT: {
          value: {
            base: '{colors.blue.10}',
            _dark: '{colors.blueDark.10}',
          },
        },
        subtle: {
          value: {
            base: '{colors.blue.9}',
            _dark: '{colors.blueDark.9}',
          },
        },
      },
      warning: {
        DEFAULT: {
          value: {
            base: '{colors.yellow.10}',
            _dark: '{colors.yellowDark.10}',
          },
        },
        subtle: {
          value: {
            base: '{colors.yellow.9}',
            _dark: '{colors.yellowDark.9}',
          },
        },
      },
      danger: {
        DEFAULT: {
          value: {
            base: '{colors.red.10}',
            _dark: '{colors.redDark.10}',
          },
        },
        subtle: {
          value: {
            base: '{colors.red.9}',
            _dark: '{colors.redDark.9}',
          },
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
      brand: {
        value: {
          base: '{colors.violet.4}',
          _dark: '{colors.violetDark.4}',
        },
      },
      danger: {
        value: {
          base: '{colors.red.4}',
          _dark: '{colors.redDark.4}',
        },
      },
      ring: {
        value: {
          base: '{colors.blue.5}',
          _dark: '{colors.darkBlue.5}',
        },
      },
    },
  },
})

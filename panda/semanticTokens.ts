import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      app: {
        value: {
          base: '{colors.mauve.1}',
          _dark: '{colors.darkMauve.1}',
        },
      },
      component: {
        value: {
          base: '{colors.mauve.2}',
          _dark: '{colors.darkMauve.2}',
        },
      },
      hovered: {
        value: {
          base: '{colors.mauve.3}',
          _dark: '{colors.darkMauve.3}',
        },
      },
      primary: {
        DEFAULT: {
          value: {
            base: '{colors.violet.6}',
            _dark: '{colors.darkViolet.6}',
          },
        },
        hovered: {
          value: {
            base: '{colors.violet.7}',
            _dark: '{colors.darkViolet.7}',
          },
        },
      },
      danger: {
        DEFAULT: {
          value: {
            base: '{colors.red.6}',
            _dark: '{colors.darkRed.6}',
          },
        },
        hovered: {
          value: {
            base: '{colors.red.7}',
            _dark: '{colors.darkRed.7}',
          },
        },
      },
    },
    fg: {
      DEFAULT: {
        value: {
          base: '{colors.mauve.10}',
          _dark: '{colors.darkMauve.10}',
        },
      },
      subtle: {
        value: {
          base: '{colors.mauve.9}',
          _dark: '{colors.darkMauve.9}',
        },
      },
      muted: {
        value: {
          base: '{colors.mauve.8}',
          _dark: '{colors.darkMauve.8}',
        },
      },
      primary: {
        DEFAULT: {
          value: {
            base: '{colors.violet.10}',
            _dark: '{colors.darkViolet.10}',
          },
        },
        subtle: {
          value: {
            base: '{colors.violet.9}',
            _dark: '{colors.darkViolet.9}',
          },
        },
      },
      success: {
        DEFAULT: {
          value: {
            base: '{colors.green.10}',
            _dark: '{colors.darkGreen.10}',
          },
        },
        subtle: {
          value: {
            base: '{colors.green.9}',
            _dark: '{colors.darkGreen.9}',
          },
        },
      },
      info: {
        DEFAULT: {
          value: {
            base: '{colors.blue.10}',
            _dark: '{colors.darkBlue.10}',
          },
        },
        subtle: {
          value: {
            base: '{colors.blue.9}',
            _dark: '{colors.darkBlue.9}',
          },
        },
      },
      warning: {
        DEFAULT: {
          value: {
            base: '{colors.yellow.10}',
            _dark: '{colors.darkYellow.10}',
          },
        },
        subtle: {
          value: {
            base: '{colors.yellow.9}',
            _dark: '{colors.darkYellow.9}',
          },
        },
      },
      danger: {
        DEFAULT: {
          value: {
            base: '{colors.red.10}',
            _dark: '{colors.darkRed.10}',
          },
        },
        subtle: {
          value: {
            base: '{colors.red.9}',
            _dark: '{colors.darkRed.9}',
          },
        },
      },
    },
    border: {
      DEFAULT: {
        value: {
          base: '{colors.mauve.4}',
          _dark: '{colors.darkMauve.4}',
        },
      },
      primary: {
        value: {
          base: '{colors.violet.4}',
          _dark: '{colors.darkViolet.4}',
        },
      },
      danger: {
        value: {
          base: '{colors.red.4}',
          _dark: '{colors.darkRed.4}',
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

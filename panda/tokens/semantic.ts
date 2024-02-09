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
        active: {
          value: {
            base: '{colors.mauve.4}',
            _dark: '{colors.mauveDark.4}',
          },
        },
      },
      disabled: {
        value: {
          base: '{colors.mauve.5}',
          _dark: '{colors.mauveDark.5}',
        },
      },
      brand: {
        subtle: {
          value: {
            base: '{colors.violet.1}',
            _dark: '{colors.violetDark.1}',
          },
        },
        solid: {
          DEFAULT: {
            value: {
              base: '{colors.violet.4}',
              _dark: '{colors.violetDark.4}',
            },
          },
          hovered: {
            value: {
              base: '{colors.violet.5}',
              _dark: '{colors.violetDark.5}',
            },
          },
          active: {
            value: {
              base: '{colors.violet.6}',
              _dark: '{colors.violetDark.6}',
            },
          },
        },
      },
      danger: {
        subtle: {
          value: {
            base: '{colors.red.1}',
            _dark: '{colors.redDark.1}',
          },
        },
        solid: {
          DEFAULT: {
            value: {
              base: '{colors.red.4}',
              _dark: '{colors.redDark.4}',
            },
          },
          hovered: {
            value: {
              base: '{colors.red.5}',
              _dark: '{colors.redDark.5}',
            },
          },
          active: {
            value: {
              base: '{colors.red.6}',
              _dark: '{colors.redDark.6}',
            },
          },
        },
      },
      warning: {
        subtle: {
          value: {
            base: '{colors.yellow.1}',
            _dark: '{colors.yellowDark.1}',
          },
        },
        solid: {
          DEFAULT: {
            value: {
              base: '{colors.yellow.4}',
              _dark: '{colors.yellowDark.4}',
            },
          },
          hovered: {
            value: {
              base: '{colors.yellow.5}',
              _dark: '{colors.yellowDark.5}',
            },
          },
          active: {
            value: {
              base: '{colors.yellow.6}',
              _dark: '{colors.yellowDark.6}',
            },
          },
        },
      },
      success: {
        subtle: {
          value: {
            base: '{colors.green.1}',
            _dark: '{colors.greenDark.1}',
          },
        },
        solid: {
          DEFAULT: {
            value: {
              base: '{colors.green.4}',
              _dark: '{colors.greenDark.4}',
            },
          },
          hovered: {
            value: {
              base: '{colors.green.5}',
              _dark: '{colors.greenDark.5}',
            },
          },
          active: {
            value: {
              base: '{colors.green.6}',
              _dark: '{colors.greenDark.6}',
            },
          },
        },
      },
      info: {
        subtle: {
          value: {
            base: '{colors.blue.1}',
            _dark: '{colors.blueDark.1}',
          },
        },
        solid: {
          DEFAULT: {
            value: {
              base: '{colors.blue.4}',
              _dark: '{colors.blueDark.4}',
            },
          },
          hovered: {
            value: {
              base: '{colors.blue.5}',
              _dark: '{colors.blueDark.5}',
            },
          },
          active: {
            value: {
              base: '{colors.blue.6}',
              _dark: '{colors.blueDark.6}',
            },
          },
        },
      },
    },
    fg: {
      DEFAULT: {
        value: {
          base: '{colors.mauve.8}',
          _dark: '{colors.mauveDark.8}',
        },
      },
      muted: {
        value: {
          base: '{colors.mauve.6}',
          _dark: '{colors.mauveDark.6}',
        },
      },
      unimportant: {
        value: {
          base: '{colors.mauve.7}',
          _dark: '{colors.mauveDark.7}',
        },
      },
      important: {
        value: {
          base: '{colors.mauve.9}',
          _dark: '{colors.mauveDark.9}',
        },
      },

      brand: {
        DEFAULT: {
          value: {
            base: '{colors.violet.8}',
            _dark: '{colors.violetDark.8}',
          },
        },
        important: {
          value: {
            base: '{colors.violet.9}',
            _dark: '{colors.violetDark.9}',
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
        important: {
          value: {
            base: '{colors.red.9}',
            _dark: '{colors.redDark.9}',
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
        important: {
          value: {
            base: '{colors.yellow.9}',
            _dark: '{colors.yellowDark.9}',
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
        important: {
          value: {
            base: '{colors.green.9}',
            _dark: '{colors.greenDark.9}',
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
        important: {
          value: {
            base: '{colors.blue.9}',
            _dark: '{colors.blueDark.9}',
          },
        },
      },
    },
    border: {
      DEFAULT: {
        value: {
          base: '{colors.mauve.5}',
          _dark: '{colors.mauveDark.5}',
        },
      },
      brand: {
        value: {
          base: '{colors.violet.2}',
          _dark: '{colors.violetDark.2}',
        },
      },
      danger: {
        value: {
          base: '{colors.red.2}',
          _dark: '{colors.redDark.2}',
        },
      },
      warning: {
        value: {
          base: '{colors.yellow.2}',
          _dark: '{colors.yellowDark.2}',
        },
      },
      success: {
        value: {
          base: '{colors.green.2}',
          _dark: '{colors.greenDark.2}',
        },
      },
      info: {
        value: {
          base: '{colors.blue.2}',
          _dark: '{colors.blueDark.2}',
        },
      },
      ring: {
        value: {
          base: '{colors.blue.4}',
          _dark: '{colors.blueDark.4}',
        },
      },
      focused: {
        value: {
          base: '{colors.violet.4}',
          _dark: '{colors.violetDark.4}',
        },
      },
    },
  },
})

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
            base: '{colors.mauve.3}',
            _dark: '{colors.mauveDark.3}',
          },
        },
        hovered: {
          value: {
            base: '{colors.mauve.4}',
            _dark: '{colors.mauveDark.4}',
          },
        },
      },
      disabled: {
        value: {
          base: '{colors.mauve.2}',
          _dark: '{colors.mauveDark.2}',
        },
      },
      brand: {
        subtle: {
          DEFAULT: {
            value: {
              base: '{colors.violet.1}',
              _dark: '{colors.violetDark.1}',
            },
          },
          hovered: {
            value: {
              base: '{colors.violet.2}',
              _dark: '{colors.violetDark.2}',
            },
          },
        },
        selection: {
          value: {
            base: '{colors.violet.4}',
            _dark: '{colors.violetDark.4}',
          },
        },
        solid: {
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
          disabled: {
            value: {
              base: '{colors.violet.5}',
              _dark: '{colors.violetDark.5}',
            },
          },
        },
      },
      danger: {
        subtle: {
          DEFAULT: {
            value: {
              base: '{colors.red.1}',
              _dark: '{colors.redDark.1}',
            },
          },
          hovered: {
            value: {
              base: '{colors.red.2}',
              _dark: '{colors.redDark.2}',
            },
          },
        },
        selection: {
          value: {
            base: '{colors.red.4}',
            _dark: '{colors.redDark.4}',
          },
        },
        solid: {
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
          disabled: {
            value: {
              base: '{colors.red.5}',
              _dark: '{colors.redDark.5}',
            },
          },
        },
      },
      success: {
        subtle: {
          DEFAULT: {
            value: {
              base: '{colors.green.1}',
              _dark: '{colors.greenDark.1}',
            },
          },
          hovered: {
            value: {
              base: '{colors.green.2}',
              _dark: '{colors.greenDark.2}',
            },
          },
        },
        selection: {
          value: {
            base: '{colors.green.4}',
            _dark: '{colors.greenDark.4}',
          },
        },
        solid: {
          DEFAULT: {
            value: {
              base: '{colors.green.6}',
              _dark: '{colors.greenDark.6}',
            },
          },
          hovered: {
            value: {
              base: '{colors.green.7}',
              _dark: '{colors.greenDark.7}',
            },
          },
          disabled: {
            value: {
              base: '{colors.green.5}',
              _dark: '{colors.greenDark.5}',
            },
          },
        },
      },
    },
    fg: {
      DEFAULT: {
        value: {
          base: '{colors.mauve.9}',
          _dark: '{colors.mauveDark.9}',
        },
      },
      muted: {
        value: {
          base: '{colors.mauve.7}',
          _dark: '{colors.mauveDark.7}',
        },
      },
      unimportant: {
        value: {
          base: '{colors.mauve.8}',
          _dark: '{colors.mauveDark.8}',
        },
      },
      important: {
        value: {
          base: '{colors.mauve.10}',
          _dark: '{colors.mauveDark.10}',
        },
      },

      brand: {
        subtle: {
          value: {
            base: '{colors.violet.8}',
            _dark: '{colors.violetDark.8}',
          },
        },
        DEFAULT: {
          value: {
            base: '{colors.violet.9}',
            _dark: '{colors.violetDark.9}',
          },
        },
        important: {
          value: {
            base: '{colors.violet.10}',
            _dark: '{colors.violetDark.10}',
          },
        },
      },
      danger: {
        subtle: {
          value: {
            base: '{colors.red.8}',
            _dark: '{colors.redDark.8}',
          },
        },
        DEFAULT: {
          value: {
            base: '{colors.red.9}',
            _dark: '{colors.redDark.9}',
          },
        },
        important: {
          value: {
            base: '{colors.red.10}',
            _dark: '{colors.redDark.10}',
          },
        },
      },
      success: {
        subtle: {
          value: {
            base: '{colors.green.8}',
            _dark: '{colors.greenDark.8}',
          },
        },
        DEFAULT: {
          value: {
            base: '{colors.green.9}',
            _dark: '{colors.greenDark.9}',
          },
        },
        important: {
          value: {
            base: '{colors.green.10}',
            _dark: '{colors.greenDark.10}',
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
      disabled: {
        value: {
          base: '{colors.mauve.5}',
          _dark: '{colors.mauveDark.5}',
        },
      },
      brand: {
        value: {
          base: '{colors.violet.3}',
          _dark: '{colors.violetDark.3}',
        },
      },
      danger: {
        value: {
          base: '{colors.red.3}',
          _dark: '{colors.redDark.3}',
        },
      },
      success: {
        value: {
          base: '{colors.green.3}',
          _dark: '{colors.greenDark.3}',
        },
      },
      ring: {
        value: {
          base: '{colors.violet.9}',
          _dark: '{colors.violetDark.9}',
        },
      },
      focused: {
        value: {
          base: '{colors.violet.6}',
          _dark: '{colors.violetDark.6}',
        },
      },
      invalid: {
        value: {
          base: '{colors.red.6}',
          _dark: '{colors.redDark.6}',
        },
      },
    },
  },
})

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
          base: '#3E63DD',
          _dark: '#3E63DD',
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

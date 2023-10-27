import { Config } from '@pandacss/dev'

import { tokens } from './tokens'
import { semanticTokens } from './semanticTokens'
import { conditions } from './conditions'
import { utilities } from './utilities'
import { keyframes } from './keyframes'
import { textStyles } from './textStyles'
import { globalCss } from './globalCss'

export const config: Config = {
  conditions,
  utilities,
  globalCss,
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
      keyframes,
    },
  },
}

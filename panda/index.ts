import { Config } from '@pandacss/dev'

import { tokens } from './tokens'
import { semanticTokens } from './semanticTokens'

export const config: Config = {
  theme: {
    extend: {
      tokens,
      semanticTokens,
    },
  },
}

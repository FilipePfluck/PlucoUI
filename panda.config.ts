import { defineConfig } from '@pandacss/dev'

import { config } from '@/panda/index'

export default defineConfig({
  preflight: true,
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
  ...config,
})

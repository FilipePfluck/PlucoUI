import React from 'react'

import { css, cx } from '../styled-system/css'
import '../src/app/globals.css'

import type { Preview } from "@storybook/react";

const withBackground = (StoryFn) => {
  return (
    <div className={cx(css({
      position: 'fixed',
      inset: '0px',
      bg: 'bg.app',
      p: '4',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      overflowY: 'auto',
      w: '100vw',
      h: '100vh'
    })) }>
       <StoryFn/>
    </div>
  )
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withBackground]
};

export default preview;
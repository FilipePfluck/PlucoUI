import React from 'react'
import type { Preview } from "@storybook/react";
import { Inter, Nunito } from 'next/font/google'

import { css, cx } from '../styled-system/css'
import '../src/app/globals.css'

import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-inter',
})
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-nunito',
})

const WithBackground = (StoryFn, context) => {
  const html = document.documentElement

  if(context.globals.theme === 'dark') {
    html.classList.add('dark')
  }else {
    html.classList.remove('dark')
  }

  useEffect(()=>{
    html.classList.add(inter.variable)
    html.classList.add(nunito.variable)
  },[])

  return (
    <div className={cx(css({
      position: 'fixed',
      inset: '0px',
      bg: 'bg.app',
      p: '4',
      pt: '16',
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
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],      
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [WithBackground]
};

export default preview;
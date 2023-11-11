import React, { useState } from 'react'
import type { Preview } from "@storybook/react";
import { Inter, Nunito } from 'next/font/google'

import { css, cx } from '../styled-system/css'
import '../src/app/globals.css'

import { Switch } from '../src/components/primitives/forms/Switch'
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

const WithBackground = (StoryFn) => {
  const [isChecked, setIsChecked] = useState(false)

  const html = document.documentElement

  if(!isChecked) {
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
      <div className={css({position: 'absolute', top: '6', right: '6'})}>
        <Switch onCheckedChange={({checked})=>{setIsChecked(checked)}}/>
      </div>
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
  decorators: [WithBackground]
};

export default preview;
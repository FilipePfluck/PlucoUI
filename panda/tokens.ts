import { Tokens } from '@pandacss/dev'

export const tokens: Tokens = {
  colors: {
    mauve: {
      1: { value: '#F1EEF2' },
      2: { value: '#FDFCFD' },
      3: { value: '#FAF9FB' },
      4: { value: '#D2CFD8' },
      5: { value: '#BDBBC8' },
      6: { value: '#92909D' },
      7: { value: '#8B8994' },
      8: { value: '#6F6D78' },
      9: { value: '#4A4851' },
      10: { value: '#201E25' },
    },
    mauveDark: {
      1: { value: '#171618' },
      2: { value: '#232225' },
      3: { value: '#2B292D' },
      4: { value: '#403D43' },
      5: { value: '#4D4B53' },
      6: { value: '#777580' },
      7: { value: '#817F8A' },
      8: { value: '#ADAAB5' },
      9: { value: '#BDBBC4' },
      10: { value: '#F1F1F3' },
    },
    red: {
      1: { value: '#FFFCFC' },
      2: { value: '#FEEBEC' },
      3: { value: '#FDD8DA' },
      4: { value: '#FCA6A7' },
      5: { value: '#F0898B' },
      6: { value: '#DC3E42' },
      7: { value: '#CE2C31' },
      8: { value: '#7A1F2D' },
      9: { value: '#5F1621' },
      10: { value: '#421017' },
    },
    redDark: {
      1: { value: '#191111' },
      2: { value: '#3B1219' },
      3: { value: '#500F1C' },
      4: { value: '#761F2A' },
      5: { value: '#972831' },
      6: { value: '#E94449' },
      7: { value: '#EB5657' },
      8: { value: '#FE8E8B' },
      9: { value: '#FFA6A3' },
      10: { value: '#FFD1D9' },
    },
    violet: {
      1: { value: '#EDE7FD' },
      2: { value: '#FDFCFE' },
      3: { value: '#F8F5FF' },
      4: { value: '#D4CAFE' },
      5: { value: '#BCAEF4' },
      6: { value: '#7058D0' },
      7: { value: '#634BC3' },
      8: { value: '#5340A0' },
      9: { value: '#453582' },
      10: { value: '#2C2357' },
    },
    violetDark: {
      1: { value: '#13111D' },
      2: { value: '#2B2046' },
      3: { value: '#35265E' },
      4: { value: '#45347A' },
      5: { value: '#534190' },
      6: { value: '#6E56CF' },
      7: { value: '#7D66D9' },
      8: { value: '#B7A3FF' },
      9: { value: '#C7B8FF' },
      10: { value: '#D5CDFE' },
    },
    blue: {
      1: { value: '#EDF2FE' },
      2: { value: '#FDFDFE' },
      3: { value: '#F7F9FF' },
      4: { value: '#C1D0FF' },
      5: { value: '#ABBDF9' },
      6: { value: '#3E63DD' },
      7: { value: '#3358D4' },
      8: { value: '#314A9B' },
      9: { value: '#263873' },
      10: { value: '#1C2954' },
    },
    blueDark: {
      1: { value: '#11131F' },
      2: { value: '#182449' },
      3: { value: '#1D2E62' },
      4: { value: '#2B4089' },
      5: { value: '#3651AB' },
      6: { value: '#3E63DD' },
      7: { value: '#5472E4' },
      8: { value: '#9EB1FF' },
      9: { value: '#BDCAFF' },
      10: { value: '#D6E1FF' },
    },
    green: {
      1: { value: '#E6F6EB' },
      2: { value: '#FBFEFC' },
      3: { value: '#F4FBF6' },
      4: { value: '#ADDDC0' },
      5: { value: '#8ECEAA' },
      6: { value: '#30A46C' },
      7: { value: '#299462' },
      8: { value: '#1D724D' },
      9: { value: '#175A3C' },
      10: { value: '#193B2D' },
    },
    greenDark: {
      1: { value: '#0E1512' },
      2: { value: '#132D21' },
      3: { value: '#113B29' },
      4: { value: '#1E593E' },
      5: { value: '#236D4A' },
      6: { value: '#30A46C' },
      7: { value: '#37BE7D' },
      8: { value: '#7AE1AF' },
      9: { value: '#A5EEC3' },
      10: { value: '#CBF6DC' },
    },
    yellow: {
      1: { value: '#FFFAB8' },
      2: { value: '#FDFDF9' },
      3: { value: '#FEFCE9' },
      4: { value: '#FFE770' },
      5: { value: '#F2D45E' },
      6: { value: '#FFE629' },
      7: { value: '#FFDC00' },
      8: { value: '#9E6C00' },
      9: { value: '#704D00' },
      10: { value: '#392F19' },
    },
    yellowDark: {
      1: { value: '#14120B' },
      2: { value: '#2F2403' },
      3: { value: '#362B00' },
      4: { value: '#534301' },
      5: { value: '#715A0D' },
      6: { value: '#FFE629' },
      7: { value: '#FFFF42' },
      8: { value: '#F6E45B' },
      9: { value: '#F7EB97' },
      10: { value: '#F6EEB4' },
    },
  },
  animations: {
    fadeIn: {
      value: 'fadeIn 150ms',
    },
    fadeOut: {
      value: 'fadeOut 150ms',
    },
    openModal: {
      value: 'openModal 150ms',
    },
    closeModal: {
      value: 'closeModal 150ms',
    },
    accordionSlideDown: {
      value: 'accordionSlideDown 0.2s',
    },
    accordionSlideUp: {
      value: 'accordionSlideUp 0.2s',
    },
    slideUpAndFadeIn: {
      value: 'slideUpAndFadeIn 0.4s',
    },
    slideRightAndFadeIn: {
      value: 'slideRightAndFadeIn 0.4s',
    },
    slideDownAndFadeIn: {
      value: 'slideDownAndFadeIn 0.4s',
    },
    slideLeftAndFadeIn: {
      value: 'slideLeftAndFadeIn 0.4s',
    },
    slideUpAndFadeOut: {
      value: 'slideUpAndFadeOut 0.2s',
    },
    slideRightAndFadeOut: {
      value: 'slideRightAndFadeOut 0.2s',
    },
    slideDownAndFadeOut: {
      value: 'slideDownAndFadeOut 0.2s',
    },
    slideLeftAndFadeOut: {
      value: 'slideLeftAndFadeOut 0.2s',
    },
    check: {
      value: 'check 0.2s',
    },
    unCheck: {
      value: 'unCheck 0.2s',
    },
    drawerSlideIn: {
      value: 'drawerSlideIn 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
    },
    drawerSlideOut: {
      value: 'drawerSlideOut 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
    },
    expand: {
      value: 'expand 0.3s',
    },
    collapse: {
      value: 'collapse 0.2s',
    },
    slideInToast: {
      value: 'slideInToast 0.2s',
    },
    slideOutToast: {
      value: 'slideOutToast 0.2s',
    },
    swipeOutToast: {
      value: 'swipeOutToast 0.1s',
    },
  },
  fonts: {
    nunito: { value: 'var(--font-nunito), sans-serif' },
    inter: { value: 'var(--font-inter), sans-serif' },
  },
}

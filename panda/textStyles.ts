import { defineTextStyles } from '@pandacss/dev'

export type HeadingTextStyles =
  | 'headingXl'
  | 'headingLg'
  | 'headingMd'
  | 'headingSm'
  | 'headingXs'

export type BodyTextStyles =
  | 'bodyXl'
  | 'bodyLg'
  | 'bodyMd'
  | 'bodySm'
  | 'bodyXs'

export type ButtonTextStyles = 'buttonLg' | 'buttonMd' | 'buttonSm'

export type TextStylesTypes =
  | HeadingTextStyles
  | BodyTextStyles
  | ButtonTextStyles

export const textStyles = defineTextStyles({
  headingXl: {
    value: {
      fontWeight: 'semibold',
      fontSize: '48px',
      lineHeight: '56px',
      fontFamily: 'nunito',
    },
  },
  headingLg: {
    value: {
      fontWeight: 'semibold',
      fontSize: '32px',
      lineHeight: '36px',
      fontFamily: 'nunito',
    },
  },
  headingMd: {
    value: {
      fontWeight: 'semibold',
      fontSize: '24px',
      lineHeight: '28px',
      fontFamily: 'nunito',
    },
  },
  headingSm: {
    value: {
      fontWeight: 'semibold',
      fontSize: '20px',
      lineHeight: '24px',
      fontFamily: 'nunito',
    },
  },
  headingXs: {
    value: {
      fontWeight: 'semibold',
      fontSize: '16px',
      lineHeight: '20px',
      fontFamily: 'nunito',
    },
  },
  bodyXl: {
    value: {
      fontWeight: 'regular',
      fontSize: '20px',
      lineHeight: '32px',
      fontFamily: 'inter',
    },
  },
  bodyLg: {
    value: {
      fontWeight: 'regular',
      fontSize: '18px',
      lineHeight: '28px',
      fontFamily: 'inter',
    },
  },
  bodyMd: {
    value: {
      fontWeight: 'regular',
      fontSize: '16px',
      lineHeight: '26px',
      fontFamily: 'inter',
    },
  },
  bodySm: {
    value: {
      fontWeight: 'regular',
      fontSize: '14px',
      lineHeight: '22px',
      fontFamily: 'inter',
    },
  },
  bodyXs: {
    value: {
      fontWeight: 'regular',
      fontSize: '12px',
      lineHeight: '18px',
      fontFamily: 'inter',
    },
  },
  buttonLg: {
    value: {
      fontWeight: 'semibold',
      fontSize: '18px',
      lineHeight: '20px',
      fontFamily: 'inter',
    },
  },
  buttonMd: {
    value: {
      fontWeight: 'semibold',
      fontSize: '16px',
      lineHeight: '18px',
      fontFamily: 'inter',
    },
  },
  buttonSm: {
    value: {
      fontWeight: 'semibold',
      fontSize: '14px',
      lineHeight: '16px',
      fontFamily: 'inter',
    },
  },
})

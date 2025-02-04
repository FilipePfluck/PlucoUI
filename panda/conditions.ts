export const conditions = {
  extend: {
    focusVisibleWithin: '&:has(:focus-visible)',
    siblingFocusVisible: '&:has(+ :focus-visible)',

    top: '&[data-placement^="top"]',
    right: '&[data-placement^="right"]',
    bottom: '&[data-placement^="bottom"]',
    left: '&[data-placement^="left"]',

    invalid: '&:is(:invalid, [data-invalid], [aria-invalid="true"])',
    invalidWithin:
      '&:has(:is(:invalid, [data-invalid], [aria-invalid="true"]))',

    hidden: '&:is([hidden], [data-state="hidden"])',

    complete: '&[data-complete]',
    incomplete: '&:is(:not([data-complete]), [data-complete="false"])',
    current: '&[data-current]',

    on: '&[data-state="on"]',
  },
}

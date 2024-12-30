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
  },
}

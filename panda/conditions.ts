export const conditions = {
  extend: {
    focusVisibleWithin: '&:has(:focus-visible)',
    siblingFocusVisible: '&:has(+ :focus-visible)',

    dataOpen: '&[data-state="open"]',
    dataClosed: '&[data-state="closed"]',
    dataDisabled: '&[data-disabled]',
    dataHighlighted: '&[data-highlighted]',
    dataOn: '&[data-state="on"]',
    dataOff: '&[data-state="off"]',
    dataVertical: '&[data-orientation="vertical"]',
    dataHorizontal: '&[data-orientation="horizontal"]',

    top: '&[data-placement="top"]',
    right: '&[data-placement="right"]',
    bottom: '&[data-placement="bottom"]',
    left: '&[data-placement="left"]',

    ariaInvalid: '&[aria-invalid="true"]',
    invalidWithin: '&:has([aria-invalid="true"])',

    hidden: '&[hidden="true"]',
    highlighted: '&[data-highlighted="true"]',
  },
}

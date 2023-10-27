export const conditions = {
  extend: {
    focusVisibleWithin: '&:has(:focus-visible)',

    dataOpen: '&[data-state="open"]',
    dataClosed: '&[data-state="closed"]',
    dataDisabled: '&[data-disabled]',
    dataHighlighted: '&[data-highlighted]',
    dataOn: '&[data-state="on"]',
    dataOff: '&[data-state="off"]',
    dataVertical: '&[data-orientation="vertical"]',
    dataHorizontal: '&[data-orientation="horizontal"]',

    top: '&[data-side="top"]',
    right: '&[data-side="right"]',
    bottom: '&[data-side="bottom"]',
    left: '&[data-side="left"]',

    ariaInvalid: '&[aria-invalid="true"]',
    invalidWithin: '&:has([aria-invalid="true"])',
  },
}

import { StyledElement } from '@/types/withCss'
import {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
} from 'react'

import { SimpleSpread } from '@/types/simpleSpread'

import { Input } from '../Input'

type InputProps = SimpleSpread<
  StyledElement<'input'>,
  {
    mask?: string
    size?: 'xs' | 'sm' | 'md' | 'lg'
    full?: boolean
    startElement?: ReactNode
    endElement?: ReactNode
    startAddon?: ReactNode
    endAddon?: ReactNode
    slotChar?: string
    autoClear?: boolean
  }
>

export const MaskInput = ({
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  mask,
  slotChar = '_',
  autoClear = true,
  ...props
}: InputProps) => {
  const internalRef = useRef<HTMLInputElement>(null)

  type Timeout = NodeJS.Timeout | string | number | undefined

  const firstNonMaskPos = useRef<number | null>(null)
  const lastRequiredNonMaskPos = useRef(0)
  const tests = useRef<(RegExp | null)[]>([])
  const buffer = useRef<string[]>([])
  const length = useRef(0)
  const oldVal = useRef<string | null>(null)
  const focus = useRef(false)
  const focusText = useRef<string | null>(null)
  const isValueChecked = useRef<boolean | null>(null)
  const partialPosition = useRef<number | null>(null)
  const defaultBuffer = useRef<string | null>(null)
  const caretTimeoutId = useRef<Timeout | null>(null)

  const selectionRange = (first?: number, last?: number) => {
    let begin
    let end
    const inputEl = internalRef.current

    if (
      !inputEl ||
      !inputEl.offsetParent ||
      inputEl !== document.activeElement
    ) {
      return null
    }

    if (typeof first === 'number') {
      begin = first
      end = typeof last === 'number' ? last : begin

      inputEl.setSelectionRange(begin, end)
    }

    begin = inputEl.selectionStart
    end = inputEl.selectionEnd

    return { begin, end }
  }

  const getPlaceholder = (i: number) => {
    if (i < slotChar.length) {
      return slotChar.charAt(i)
    }

    return slotChar.charAt(0)
  }

  const seekNext = (position: number) => {
    position++
    while (position < length.current && !tests.current[position]) {
      position++
    }
    return position
  }

  const seekPrev = (position: number) => {
    position--
    while (position >= 0 && !tests.current[position]) {
      position--
    }
    return position
  }

  const clearBuffer = (start: number, end: number) => {
    let i

    for (i = start; i < end && i < length.current; i++) {
      if (tests.current[i]) {
        buffer.current[i] = getPlaceholder(i)
      }
    }
  }

  const writeBuffer = () => {
    if (internalRef.current) {
      internalRef.current.value = buffer.current.join('')
    }
  }

  const shiftLeft = (begin: number, end: number) => {
    let i
    let j

    if (begin < 0) {
      return
    }

    for (i = begin, j = seekNext(end); i < length.current; i++) {
      const currentTest = tests.current[i]
      if (currentTest) {
        if (j < length.current && currentTest.test(buffer.current[j])) {
          buffer.current[i] = buffer.current[j]
          buffer.current[j] = getPlaceholder(j)
        } else {
          break
        }

        j = seekNext(j)
      }
    }

    writeBuffer()

    if (typeof firstNonMaskPos.current === 'number') {
      selectionRange(Math.max(firstNonMaskPos.current, begin))
    }
  }

  const checkVal = (allow?: boolean) => {
    isValueChecked.current = true
    // try to place characters where they belong
    const test = internalRef.current && internalRef.current.value
    let lastMatch = -1
    let i
    let c
    let pos

    if (typeof test === 'string') {
      for (i = 0, pos = 0; i < length.current; i++) {
        const currentTest = tests.current[i]

        if (currentTest) {
          buffer.current[i] = getPlaceholder(i)

          while (pos++ < test.length) {
            c = test.charAt(pos - 1)

            if (currentTest.test(c)) {
              buffer.current[i] = c
              lastMatch = i
              break
            }
          }

          if (pos > test.length) {
            clearBuffer(i + 1, length.current)
            break
          }
        } else {
          if (buffer.current[i] === test.charAt(pos)) {
            pos++
          }

          if (partialPosition.current && i < partialPosition?.current) {
            lastMatch = i
          }
        }
      }
    }

    if (allow) {
      writeBuffer()
    } else if (
      partialPosition.current &&
      lastMatch + 1 < partialPosition.current
    ) {
      if (autoClear || buffer.current.join('') === defaultBuffer.current) {
        // Invalid value. Remove it and replace it with the
        // mask, which is the default behavior.
        if (internalRef.current && internalRef.current.value) {
          internalRef.current.value = ''
        }

        clearBuffer(0, length.current)
      } else {
        // Invalid value, but we opt to show the value to the
        // user and allow them to correct their mistake.
        writeBuffer()
      }
    } else {
      writeBuffer()

      if (internalRef.current) {
        internalRef.current.value = internalRef.current.value.substring(
          0,
          lastMatch + 1,
        )
      }
    }

    return partialPosition.current ? i : firstNonMaskPos.current
  }

  const updateModel = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const val = e && e.target.value

      onChange({
        ...e,
        target: {
          ...e.target,
          value: defaultBuffer.current !== val ? val : '',
        },
      })
    }
  }

  const maskOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    focus.current = false
    checkVal()
    updateModel(e)

    onBlur && onBlur(e)

    if (
      internalRef.current &&
      internalRef.current.value !== focusText.current
    ) {
      const event = document.createEvent('HTMLEvents')

      event.initEvent('change', true, false)
      internalRef.current.dispatchEvent(event)
    }
  }

  const maskOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (props.readOnly) {
      return
    }

    focus.current = true

    if (caretTimeoutId.current) {
      clearTimeout(caretTimeoutId.current)
    }

    if (internalRef.current) {
      focusText.current = internalRef.current.value
    } else {
      focusText.current = ''
    }

    const position = checkVal() || 0

    caretTimeoutId.current = setTimeout(() => {
      if (internalRef.current !== document.activeElement) {
        return
      }

      writeBuffer()

      if (mask && position === mask.replace('?', '').length) {
        selectionRange(0, position)
      } else {
        selectionRange(position)
      }
    }, 100)

    onFocus && onFocus(e)
  }

  const maskOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (props.readOnly) {
      return
    }

    const code = e.code
    let position
    let begin
    let end

    oldVal.current = internalRef.current?.value || ''

    if (code === 'Backspace' || code === 'Delete') {
      position = selectionRange()

      if (!position) {
        return
      }

      begin = position.begin || 0
      end = position.end || begin

      if (end - begin === 0) {
        begin =
          code !== 'Delete' ? seekPrev(begin) : (end = seekNext(begin - 1))
        end = code === 'Delete' ? seekNext(end) : end
      }

      clearBuffer(begin, end)
      shiftLeft(begin, end - 1)
      updateModel(e as unknown as ChangeEvent<HTMLInputElement>)

      e.preventDefault()
    } else if (code === 'Enter') {
      maskOnBlur(e as unknown as FocusEvent<HTMLInputElement>)
      updateModel(e as unknown as ChangeEvent<HTMLInputElement>)
    } else if (code === 'Escape') {
      if (internalRef.current) {
        internalRef.current.value = focusText.current || ''
      }

      selectionRange(0, checkVal() || 0)
      updateModel(e as unknown as ChangeEvent<HTMLInputElement>)
      e.preventDefault()
    }
  }

  const handleInputChange = (
    e: ClipboardEvent<HTMLInputElement> | FormEvent<HTMLInputElement>,
    isOnPaste = false,
  ) => {
    if (props.readOnly) {
      return
    }

    if (!isOnPaste) {
      const position = checkVal(true)

      selectionRange(position || 0)
    }

    updateModel(e as unknown as ChangeEvent<HTMLInputElement>)
  }

  const updateValue = (allow?: boolean) => {
    let pos

    if (internalRef.current) {
      if (props.value == null) {
        internalRef.current.value = ''
      } else {
        internalRef.current.value = String(props.value)
        pos = checkVal(allow)

        setTimeout(() => {
          if (internalRef.current) {
            writeBuffer()

            return checkVal(allow)
          }
        }, 10)
      }

      focusText.current = internalRef.current.value
    }

    return pos
  }

  const init = () => {
    if (mask) {
      tests.current = []
      partialPosition.current = mask.length
      length.current = mask.length
      firstNonMaskPos.current = null
      const defs = {
        9: '[0-9]',
        a: '[A-Za-z]',
        '*': '[A-Za-z0-9]',
      }

      const maskTokens = mask.split('')

      for (let i = 0; i < maskTokens.length; i++) {
        const c = maskTokens[i]

        if (c === '?') {
          length.current--
          partialPosition.current = i
          // @ts-ignore
        } else if (defs[c]) {
          // @ts-ignore
          tests.current.push(new RegExp(defs[c]))

          if (firstNonMaskPos.current === null) {
            firstNonMaskPos.current = tests.current.length - 1
          }

          if (i < partialPosition.current) {
            lastRequiredNonMaskPos.current = tests.current.length - 1
          }
        } else {
          // @ts-ignore
          tests.current.push(null)
        }
      }

      buffer.current = []

      for (let i = 0; i < maskTokens.length; i++) {
        const c = maskTokens[i]

        if (c !== '?') {
          // @ts-ignore
          if (defs[c]) {
            buffer.current.push(getPlaceholder(i))
          } else {
            buffer.current.push(c)
          }
        }
      }

      defaultBuffer.current = buffer.current.join('')
    }
  }

  const maskOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      return onChange(e)
    }
  }

  const _onChange = !mask ? onChange : maskOnChange
  const _onFocus = !mask ? onFocus : maskOnFocus
  const _onBlur = !mask ? onBlur : maskOnBlur
  const _onKeyDown = !mask ? onKeyDown : maskOnKeyDown

  useEffect(() => {
    init()
    updateValue()
    // eslint-disable-next-line
  }, [mask])

  return (
    <Input
      onChange={_onChange}
      onFocus={_onFocus}
      onBlur={_onBlur}
      onKeyDown={_onKeyDown}
      onPaste={(e) => handleInputChange(e, true)}
      onInput={handleInputChange}
      {...props}
      ref={internalRef}
    />
  )
}

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AccordionRootProps as ArkAccordionProps } from '@ark-ui/react'

import * as S from './styles'

type Item = {
  id: string
  title: string
  content: string
}

type AccordionProps = ArkAccordionProps & {
  items: Item[]
}

type AccordionItemProps = Item & {
  isOpen?: boolean
}

const AccordionItem = ({
  content,
  id,
  title,
  isOpen = false,
}: AccordionItemProps) => {
  const [height, setHeight] = useState(0)
  const originalStylesRef = useRef<Record<string, string>>()
  const contentRef = useRef<HTMLDivElement>(null)
  const isMountAnimationPreventedRef = useRef(isOpen)

  // TODO - fix bug on accordion with `defaultValue` and without `multiple`

  useEffect(() => {
    const content = contentRef.current

    const rAF = requestAnimationFrame(() => {
      console.log('rAF')
      isMountAnimationPreventedRef.current = false
    })

    if (content) {
      originalStylesRef.current = originalStylesRef.current || {
        visibility: content.style.visibility,
        position: content.style.position,
        display: content.style.display,
      }

      content.style.visibility = 'hidden'
      content.style.position = 'absolute'
      content.style.display = 'block'

      const rect = content.getBoundingClientRect()
      setHeight(rect.height)

      content.style.visibility = originalStylesRef.current.visibility
      content.style.position = originalStylesRef.current.position
      content.style.display = originalStylesRef.current.display
    }

    return () => cancelAnimationFrame(rAF)
  }, [])

  useLayoutEffect(() => {
    const content = contentRef.current

    if (content) {
      if (isMountAnimationPreventedRef.current) {
        content.style.transitionDuration = '0s'
        content.style.animationName = 'none'
      } else {
        if (isOpen) {
          content.style.transitionDuration = '0.2s'
          content.style.animationName = 'accordionSlideDown'
        } else {
          content.style.transitionDuration = '0.2s'
          content.style.animationName = 'accordionSlideUp'
        }
      }
    }
  }, [isOpen])

  return (
    <S.Item value={id}>
      <S.Trigger>{title}</S.Trigger>
      <S.Content
        style={{
          // @ts-ignore
          '--accordion-content-height': height ? `${height}px` : undefined,
        }}
        ref={contentRef}
      >
        {content}
      </S.Content>
    </S.Item>
  )
}

export const Accordion = ({
  items,
  defaultValue,
  ...props
}: AccordionProps) => {
  const [value, setValue] = useState<string[]>(defaultValue || [])

  // check this console.log out
  console.log(value)

  return (
    <S.Root
      onValueChange={({ value }) => setValue(value)}
      defaultValue={defaultValue}
      {...props}
    >
      {items.map((item) => (
        <AccordionItem
          isOpen={value.includes(item.id)}
          key={item.id}
          {...item}
        />
      ))}
    </S.Root>
  )
}

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

const AccordionItem = ({ content, id, title }: AccordionItemProps) => {
  return (
    <S.Item value={id}>
      <S.Trigger>{title}</S.Trigger>
      <S.Content>{content}</S.Content>
    </S.Item>
  )
}

export const Accordion = ({ items, ...props }: AccordionProps) => {
  return (
    <S.Root {...props}>
      {items.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </S.Root>
  )
}

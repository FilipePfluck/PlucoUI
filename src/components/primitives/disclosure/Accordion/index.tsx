import {
  AccordionRootProps as ArkAccordionProps,
  AccordionItemProps as ArkAccordionItemProps,
} from '@ark-ui/react'

import S from './styles'
import { SystemStyleObject } from '@/styled-system/types'

type Item = Omit<ArkAccordionItemProps, 'value'> & {
  id: string
  title: string
  content: string
  css?: SystemStyleObject
}

type AccordionProps = ArkAccordionProps & {
  items: Item[]
}

type AccordionItemProps = Item

const AccordionItem = ({
  content,
  id,
  title,
  ...props
}: AccordionItemProps) => {
  return (
    <S.Item value={id} {...props}>
      <S.ItemTrigger>{title}</S.ItemTrigger>
      <S.ItemContent>{content}</S.ItemContent>
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

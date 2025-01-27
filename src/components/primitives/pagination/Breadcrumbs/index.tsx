import { ChevronRight } from 'lucide-react'
import * as S from './styles'

type LinkProps = {
  href: string
  label: string
}

type BreadcrumbProps = {
  links: LinkProps[]
  currentLink: string
}

export const Breadcrumb = ({ links, currentLink }: BreadcrumbProps) => {
  return (
    <S.List>
      {links.map(({ href, label }, index) => (
        <>
          <S.Link key={`${label}-${index}`} href={href}>
            {label}
          </S.Link>
          <ChevronRight size={16} color="var(--colors-fg-unimportant)" />
        </>
      ))}
      <S.CurrentLink>{currentLink}</S.CurrentLink>
    </S.List>
  )
}

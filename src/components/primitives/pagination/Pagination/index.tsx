import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IconButton } from '../../buttons/IconButton'
import S from './styles'

export const Pagination = () => {
  return (
    <S.Root count={100} pageSize={5}>
      {({ pages }) => (
        <>
          <S.PrevTrigger asChild>
            <IconButton intent="ghost" aria-label="Previous page">
              <ChevronLeft size={16} />
            </IconButton>
          </S.PrevTrigger>
          {pages.map((page, index) =>
            page.type === 'page' ? (
              <S.Item key={index} {...page}>
                {page.value}
              </S.Item>
            ) : (
              <S.Ellipsis key={index} index={index}>
                &#8230;
              </S.Ellipsis>
            ),
          )}
          <S.NextTrigger asChild>
            <IconButton intent="ghost" aria-label="Previous page">
              <ChevronRight size={16} />
            </IconButton>
          </S.NextTrigger>
        </>
      )}
    </S.Root>
  )
}

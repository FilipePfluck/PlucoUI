import { Children, isValidElement, useMemo } from 'react'

import { StyledElement } from '@/types/withCss'
import { ark } from '@ark-ui/react'
import { StyledGroup } from './styles'

export const Group = ({ children, ...props }: StyledElement<'div'>) => {
  const _children = useMemo(() => {
    const childArray = Children.toArray(children).filter(isValidElement)
    const count = childArray.length

    return childArray.map((child, index) => {
      return (
        <ark.div
          key={index}
          asChild
          data-group-item=""
          style={{
            // @ts-ignore
            '--group-count': count,
            '--group-index': index,
          }}
        >
          {child}
        </ark.div>
      )
    })
  }, [children])

  return <StyledGroup {...props}>{_children}</StyledGroup>
}

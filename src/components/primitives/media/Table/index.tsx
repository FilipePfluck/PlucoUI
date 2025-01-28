import { StyledElement } from '@/types/withCss'
import * as S from './styles'

// eslint-disable-next-line
export type TableProps<T extends Record<string, any>> = {
  data: T[]
  columns: {
    key: keyof T
    label: string
    headerProps?: StyledElement<'th'>
    cellProps?: StyledElement<'td'>
  }[]
  dataUniqueIdentifier: keyof T
}

// eslint-disable-next-line
export const Table = <T extends Record<string, any>>({
  data,
  dataUniqueIdentifier,
  columns,
}: TableProps<T>) => {
  console.log(data, columns)

  return (
    <S.Root>
      <S.TableHeader>
        <S.TableRow>
          {columns.map(({ key, label, headerProps }) => (
            <S.ColumnHeader key={key as string} {...headerProps}>
              {label}
            </S.ColumnHeader>
          ))}
        </S.TableRow>
      </S.TableHeader>
      <S.TableBody>
        {data.map((item) => (
          <S.TableRow key={item[dataUniqueIdentifier]}>
            {columns.map(({ key, cellProps }) => (
              <S.TableCell key={key as string} {...cellProps}>
                {item[key]}
              </S.TableCell>
            ))}
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Root>
  )
}

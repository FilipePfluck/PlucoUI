import {
  Portal,
  DatePickerRootProps as ArkDatePickerProps,
  UseDatePickerReturn,
} from '@ark-ui/react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { IconButton } from '../buttons/IconButton'
import S, { CustomInput } from './styles'
import { Button } from '../buttons/Button'
import { ReactNode } from 'react'
import { Input } from '../inputs/Input'
import { Flex } from '@/styled-system/jsx'

const PrevTrigger = ({ label }: { label: string }) => {
  return (
    <S.PrevTrigger asChild>
      <IconButton intent="ghost" aria-label={label}>
        <ChevronLeft size={16} />
      </IconButton>
    </S.PrevTrigger>
  )
}

const NextTrigger = ({ label }: { label: string }) => {
  return (
    <S.NextTrigger asChild>
      <IconButton intent="ghost" aria-label={label}>
        <ChevronRight size={16} />
      </IconButton>
    </S.NextTrigger>
  )
}

const ViewTrigger = () => {
  return (
    <S.ViewTrigger asChild>
      <Button intent="ghost" size="sm">
        <S.RangeText />
      </Button>
    </S.ViewTrigger>
  )
}

type ViewControlProps = {
  view: 'day' | 'month' | 'year'
}

const ViewControl = ({ view }: ViewControlProps) => {
  const viewControlLabelSubject = {
    day: 'month',
    month: 'year',
    year: 'decade',
  }
  const prevTriggerLabel = `Previous ${viewControlLabelSubject[view]}`
  const nextTriggerLabel = `Next ${viewControlLabelSubject[view]}`

  return (
    <S.ViewControl>
      <PrevTrigger label={prevTriggerLabel} />
      <ViewTrigger />
      <NextTrigger label={nextTriggerLabel} />
    </S.ViewControl>
  )
}

type ViewTableProps = {
  api: UseDatePickerReturn
  view: 'day' | 'month' | 'year'
}

interface Cell {
  label: string
  value: number
}

const ViewTable = ({ api, view }: ViewTableProps) => {
  const tableBodyData = {
    day: api.weeks,
    month: api.getMonthsGrid({ columns: 4, format: 'short' }),
    year: api.getYearsGrid({ columns: 4 }),
  }

  // variable can be Cell | DateValue
  // I am using any here because I won't bother to install a lib
  // just to import the `DateValue` type

  // eslint-disable-next-line
  function isCell(variable: Cell | any): variable is Cell {
    return (variable as Cell).value !== undefined
  }

  return (
    <S.Table>
      {view === 'day' && (
        <S.TableHead>
          <S.TableRow>
            {api.weekDays.map((weekDay, id) => (
              <S.TableHeader key={id}>{weekDay.narrow}</S.TableHeader>
            ))}
          </S.TableRow>
        </S.TableHead>
      )}
      <S.TableBody>
        {tableBodyData[view].map((timeUnits, id) => (
          <S.TableRow fewerColumns={view !== 'day'} key={id}>
            {timeUnits.map((timeUnit, id) => (
              <S.TableCell
                key={id}
                value={isCell(timeUnit) ? timeUnit.value : timeUnit}
              >
                <S.TableCellTrigger>
                  {isCell(timeUnit) ? timeUnit.label : timeUnit.day}
                </S.TableCellTrigger>
              </S.TableCell>
            ))}
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  )
}

type ContentProps = {
  standalone?: boolean
  children: ReactNode
}

export const Content = ({ standalone = false, children }: ContentProps) => {
  if (standalone) {
    return children
  }

  return (
    <Portal>
      <S.Positioner>{children}</S.Positioner>
    </Portal>
  )
}

export const DatePicker = ({
  open,
  selectionMode,
  ...props
}: ArkDatePickerProps) => {
  const DateInput = selectionMode === 'range' ? CustomInput : Input

  return (
    <S.Root open={open} selectionMode={selectionMode} {...props}>
      {!open && (
        <S.Control>
          <Flex>
            <S.Input asChild>
              <DateInput
                // TODO - fix this
                css={selectionMode !== 'range' ? { w: '262px' } : {}}
              />
            </S.Input>
            {selectionMode === 'range' && (
              <S.Input index={1} asChild>
                <DateInput side="end" />
              </S.Input>
            )}
          </Flex>
          <S.Trigger asChild>
            <IconButton intent="secondary" aria-label="Open date picker">
              <Calendar />
            </IconButton>
          </S.Trigger>
        </S.Control>
      )}
      <Content standalone={open}>
        <S.Content>
          <S.View view="day">
            <S.Context>
              {(api) => (
                <>
                  <ViewControl view="day" />
                  <ViewTable api={api} view="day" />
                </>
              )}
            </S.Context>
          </S.View>

          <S.View view="month">
            <S.Context>
              {(api) => (
                <>
                  <ViewControl view="month" />
                  <ViewTable api={api} view="month" />
                </>
              )}
            </S.Context>
          </S.View>

          <S.View view="year">
            <S.Context>
              {(api) => (
                <>
                  <ViewControl view="year" />
                  <ViewTable api={api} view="year" />
                </>
              )}
            </S.Context>
          </S.View>
        </S.Content>
      </Content>
    </S.Root>
  )
}

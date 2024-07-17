import {
  Portal,
  DatePickerRootProps as ArkDatePickerProps,
  UseDatePickerReturn,
} from '@ark-ui/react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { IconButton } from '../../buttons/IconButton'
import S from './styles'
import { Button } from '../../buttons/Button'

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
          <S.TableRow key={id}>
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

export const DatePicker = ({ ...props }: ArkDatePickerProps) => {
  return (
    <S.Root {...props}>
      <S.Label>Date Picker</S.Label>
      <S.Control>
        <S.Input />
        <S.Trigger asChild>
          <IconButton intent="secondary" aria-label="Open date picker">
            <Calendar />
          </IconButton>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
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
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}

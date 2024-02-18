import {
  Portal,
  DatePickerRootProps as ArkDatePickerProps,
} from '@ark-ui/react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { IconButton } from '../../buttons/IconButton'
import * as S from './styles'
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
            {/* DAY  */}
            <S.View view="day">
              {(api) => (
                <>
                  <S.ViewControl>
                    <PrevTrigger label="Previous month" />
                    <ViewTrigger />
                    <NextTrigger label="Next month" />
                  </S.ViewControl>
                  <S.Table>
                    <S.TableHead>
                      <S.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <S.TableHeader key={id}>
                            {weekDay.narrow}
                          </S.TableHeader>
                        ))}
                      </S.TableRow>
                    </S.TableHead>
                    <S.TableBody>
                      {api.weeks.map((week, id) => (
                        <S.TableRow key={id}>
                          {week.map((day, id) => (
                            <S.TableCell key={id} value={day}>
                              <S.TableCellTrigger>{day.day}</S.TableCellTrigger>
                            </S.TableCell>
                          ))}
                        </S.TableRow>
                      ))}
                    </S.TableBody>
                  </S.Table>
                </>
              )}
            </S.View>

            {/* MONTH  */}
            <S.View view="month">
              {(api) => (
                <>
                  <S.ViewControl>
                    <PrevTrigger label="Previous year" />
                    <ViewTrigger />
                    <NextTrigger label="Next year" />
                  </S.ViewControl>
                  <S.Table>
                    <S.TableBody>
                      {api
                        .getMonthsGrid({ columns: 4, format: 'short' })
                        .map((months, id) => (
                          <S.TableRow key={id} fewerColumns>
                            {months.map((month, id) => (
                              <S.TableCell key={id} value={month.value}>
                                <S.TableCellTrigger>
                                  {month.label}
                                </S.TableCellTrigger>
                              </S.TableCell>
                            ))}
                          </S.TableRow>
                        ))}
                    </S.TableBody>
                  </S.Table>
                </>
              )}
            </S.View>

            {/* YEAR  */}
            <S.View view="year">
              {(api) => (
                <>
                  <S.ViewControl>
                    <PrevTrigger label="Previous decade" />
                    <ViewTrigger />
                    <NextTrigger label="Next decade" />
                  </S.ViewControl>
                  <S.Table>
                    <S.TableBody>
                      {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                        <S.TableRow key={id} fewerColumns>
                          {years.map((year, id) => (
                            <S.TableCell key={id} value={year.value}>
                              <S.TableCellTrigger>
                                {year.label}
                              </S.TableCellTrigger>
                            </S.TableCell>
                          ))}
                        </S.TableRow>
                      ))}
                    </S.TableBody>
                  </S.Table>
                </>
              )}
            </S.View>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}

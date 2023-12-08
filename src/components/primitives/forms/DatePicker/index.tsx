import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { IconButton } from '../../buttons/IconButton'
import * as S from './styles'
import { Portal } from '@ark-ui/react'

export const DatePicker = () => {
  return (
    <S.Root>
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
              {(api) => (
                <>
                  <S.ViewControl>
                    <S.PrevTrigger asChild>
                      <IconButton intent="ghost" aria-label="Previous month">
                        <ChevronLeft size={16} />
                      </IconButton>
                    </S.PrevTrigger>
                    <S.ViewTrigger>
                      <S.RangeText />
                    </S.ViewTrigger>
                    <S.NextTrigger asChild>
                      <IconButton intent="ghost" aria-label="Next month">
                        <ChevronRight size={16} />
                      </IconButton>
                    </S.NextTrigger>
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
          </S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}

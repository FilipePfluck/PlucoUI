import { Check, Pencil, X } from 'lucide-react'
import { IconButton } from '../../buttons/IconButton'
import { Input } from '../Input'
import * as S from './styles'
import { EditableRootProps } from '@ark-ui/react'

export const Editable = (props: EditableRootProps) => {
  return (
    <S.Root width="lg" {...props}>
      {(state) => (
        <>
          <S.Area>
            <S.Input width="lg" />
            <S.Preview width="lg" />
          </S.Area>
          <S.Control>
            {state.isEditing ? (
              <>
                <S.SubmitTrigger asChild>
                  <IconButton aria-label="Save" intent="secondary">
                    <Check />
                  </IconButton>
                </S.SubmitTrigger>
                <S.CancelTrigger asChild>
                  <IconButton aria-label="Cancel" intent="secondary">
                    <X />
                  </IconButton>
                </S.CancelTrigger>
              </>
            ) : (
              <S.EditTrigger asChild>
                <IconButton aria-label="Edit" intent="secondary">
                  <Pencil />
                </IconButton>
              </S.EditTrigger>
            )}
          </S.Control>
        </>
      )}
    </S.Root>
  )
}

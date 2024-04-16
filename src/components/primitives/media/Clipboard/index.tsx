import { ClipboardRootProps } from '@ark-ui/react'
import { CheckIcon, ClipboardCopyIcon } from 'lucide-react'
import { Label } from '../../forms/Label'
import { Input } from '../../forms/Input'
import { IconButton } from '../../buttons/IconButton'

import * as S from './styles'

export const Demo = (props: ClipboardRootProps) => {
  return (
    <S.Root value="https://ark-ui.com" {...props}>
      <Label>Copy this link</Label>
      <S.Control>
        <S.Input asChild>
          <Input />
        </S.Input>
        <S.Trigger asChild>
          <IconButton intent="secondary" aria-label="Copy">
            <S.Indicator copied={<CheckIcon />}>
              <ClipboardCopyIcon />
            </S.Indicator>
          </IconButton>
        </S.Trigger>
      </S.Control>
    </S.Root>
  )
}

import { Trash2Icon } from 'lucide-react'
import * as S from './styles'
import { IconButton } from '../../buttons/IconButton'
import { Button } from '../../buttons/Button'
import { FileUploadRootProps } from '@ark-ui/react'
import { SystemStyleObject } from '@pandacss/dev'

export type FileUploadProps = FileUploadRootProps & {
  css?: SystemStyleObject
}

export const FileUpload = ({ ...props }: FileUploadRootProps) => {
  return (
    <S.Root {...props}>
      <S.Dropzone>
        <S.Label>Drop your files here</S.Label>
        <S.Trigger asChild>
          <Button>Open Dialog</Button>
        </S.Trigger>
      </S.Dropzone>
      <S.ItemGroup>
        {(files) =>
          files.map((file, id) => (
            <S.Item key={id} file={file}>
              <S.ItemPreview type="image/*">
                <S.ItemPreviewImage />
              </S.ItemPreview>
              <S.ItemName />
              <S.ItemSizeText />
              <S.ItemDeleteTrigger asChild>
                <IconButton aria-label="Delete file" intent="link">
                  <Trash2Icon />
                </IconButton>
              </S.ItemDeleteTrigger>
            </S.Item>
          ))
        }
      </S.ItemGroup>
    </S.Root>
  )
}

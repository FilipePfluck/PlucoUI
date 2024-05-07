import { FileUploadRootProps } from '@ark-ui/react'
import { Trash2Icon, Upload } from 'lucide-react'

import { SystemStyleObject } from '@pandacss/dev'

import { IconButton } from '../../buttons/IconButton'
import { Button } from '../../buttons/Button'

import S from './styles'

export type FileUploadProps = FileUploadRootProps & {
  css?: SystemStyleObject
}

export const FileUpload = ({ ...props }: FileUploadRootProps) => {
  return (
    <S.Root {...props}>
      <S.Dropzone>
        <Upload size={96} />
        <S.Label>Drop your files here or</S.Label>
        <S.Trigger asChild>
          <Button>Search your files</Button>
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
                <IconButton aria-label="Delete file" intent="ghost">
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

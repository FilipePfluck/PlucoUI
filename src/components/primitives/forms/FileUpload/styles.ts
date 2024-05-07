import { FileUpload } from '@ark-ui/react'
import { ElementType } from 'react'

import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { RecipeRuntimeFn, StyledComponent } from '@/styled-system/types'
import { RecipeVariantRecord } from '@pandacss/dev'

const Pluco = <T extends Record<string, ElementType>>(
  ArkComponent: T,
  config: Record<keyof T, RecipeRuntimeFn<RecipeVariantRecord>>,
): {
  [P in keyof T]: StyledComponent<
    T[P]
    // I want to add the correct variants type here
  >
} => {
  // eslint-disable-next-line
  const result = {} as { [P in keyof T]: StyledComponent<T[P]> }

  Object.keys(ArkComponent).forEach((key) => {
    Object.assign(result, {
      [key]: styled(ArkComponent[key], config[key as keyof T]),
    })
  })

  return result
}

export default Pluco(FileUpload, {
  Root: cva({
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4',
      width: '100%',
    },
    variants: {
      ligma: {
        sugma: {},
        amogus: {},
      },
    },
  }),
  Dropzone: cva({
    base: {
      alignItems: 'center',
      background: 'bg.card',
      borderRadius: 'lg',
      borderWidth: '1px',
      borderColor: 'border',
      display: 'flex',
      flexDirection: 'column',
      gap: '4',
      justifyContent: 'center',
      minHeight: '80',
      px: '6',
      py: '4',
    },
  }),
  Label: cva({
    base: {
      textStyle: 'headingXs',
      color: 'fg.important',
    },
  }),
  ItemGroup: cva({
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3',
    },
  }),
  Item: cva({
    base: {
      animation: 'fadeIn 0.25s ease-out',
      background: 'bg.card',
      borderRadius: 'lg',
      borderWidth: '1px',
      borderColor: 'border',
      columnGap: '3',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateAreas: `
          "preview name delete"
          "preview size delete"
          `,
      p: '4',
    },
  }),
  ItemPreview: cva({
    base: {
      gridArea: 'preview',
    },
  }),
  ItemPreviewImage: cva({
    base: {
      aspectRatio: '1',
      height: '10',
      objectFit: 'scale-down',
      width: '10',
    },
  }),
  ItemName: cva({
    base: {
      color: 'fg',
      fontWeight: 'medium',
      gridArea: 'name',
      textStyle: 'sm',
    },
  }),
  ItemSizeText: cva({
    base: {
      color: 'fg.unimportant',
      gridArea: 'size',
      textStyle: 'sm',
    },
  }),
  ItemDeleteTrigger: cva({
    base: {
      alignSelf: 'flex-start',
      gridArea: 'delete',
    },
  }),
  Trigger: cva({}),
})

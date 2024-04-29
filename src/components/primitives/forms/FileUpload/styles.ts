import { styled } from '@/styled-system/jsx'
import { FileUpload } from '@ark-ui/react'

export const Root = styled(FileUpload.Root, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4',
    width: '100%',
  },
})

export const Dropzone = styled(FileUpload.Dropzone, {
  base: {
    alignItems: 'center',
    background: 'bg.card',
    borderRadius: 'lg',
    borderWidth: '1px',
    display: 'flex',
    flexDirection: 'column',
    gap: '3',
    justifyContent: 'center',
    minHeight: '80',
    px: '6',
    py: '4',
  },
})

export const Label = styled(FileUpload.Label, {
  base: {
    textStyle: 'headingXs',
    color: 'fg.important',
  },
})

export const Trigger = styled(FileUpload.Trigger, {
  base: {},
})

export const ItemGroup = styled(FileUpload.ItemGroup, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3',
  },
})

export const Item = styled(FileUpload.Item, {
  base: {
    animation: 'fadeIn 0.25s ease-out',
    background: 'bg.card',
    borderRadius: 'lg',
    borderWidth: '1px',
    columnGap: '3',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateAreas: `
        "preview name delete"
        "preview size delete"
        `,
    p: '4',
  },
})

export const ItemPreview = styled(FileUpload.ItemPreview, {
  base: {
    gridArea: 'preview',
  },
})

export const ItemPreviewImage = styled(FileUpload.ItemPreviewImage, {
  base: {
    aspectRatio: '1',
    height: '10',
    objectFit: 'scale-down',
    width: '10',
  },
})

export const ItemName = styled(FileUpload.ItemName, {
  base: {
    color: 'fg',
    fontWeight: 'medium',
    gridArea: 'name',
    textStyle: 'sm',
  },
})

export const ItemSizeText = styled(FileUpload.ItemSizeText, {
  base: {
    color: 'fg.unimportant',
    gridArea: 'size',
    textStyle: 'sm',
  },
})

export const ItemDeleteTrigger = styled(FileUpload.ItemDeleteTrigger, {
  base: {
    alignSelf: 'flex-start',
    gridArea: 'delete',
  },
})

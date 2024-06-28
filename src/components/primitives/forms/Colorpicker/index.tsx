import { PipetteIcon } from 'lucide-react'
import { HStack, Stack } from '@/styled-system/jsx'

import S from './styles'

import { IconButton } from '../../buttons/IconButton'
import { Input } from '../Input'
import { Text } from '../../typography/Text'
import { ColorPickerRootProps, Portal } from '@ark-ui/react'
import { Label } from '../Label'

const presets = [
  'hsl(10, 81%, 59%)',
  'hsl(60, 81%, 59%)',
  'hsl(100, 81%, 59%)',
  'hsl(175, 81%, 59%)',
  'hsl(190, 81%, 59%)',
  'hsl(205, 81%, 59%)',
  'hsl(220, 81%, 59%)',
  'hsl(250, 81%, 59%)',
  'hsl(280, 81%, 59%)',
  'hsl(350, 81%, 59%)',
]

export const Demo = (props: ColorPickerRootProps) => {
  return (
    <S.Root
      positioning={{
        placement: 'bottom-end',
      }}
      {...props}
    >
      <Label>Color Picker</Label>
      <S.Control>
        <S.ChannelInput channel="hex" asChild>
          <Input />
        </S.ChannelInput>
        <S.Trigger asChild>
          <IconButton aria-label="Open color picker" intent="secondary">
            <S.Swatch value="" />
          </IconButton>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <Stack gap="3">
              <S.Area>
                <S.AreaBackground />
                <S.AreaThumb />
              </S.Area>
              <HStack gap="3">
                <S.EyeDropperTrigger asChild>
                  <IconButton
                    intent="secondary"
                    aria-label="Pick a color from screen"
                  >
                    <PipetteIcon />
                  </IconButton>
                </S.EyeDropperTrigger>
                <Stack gap="2" flex="1">
                  <S.ChannelSlider channel="hue">
                    <S.ChannelSliderTrack />
                    <S.ChannelSliderThumb />
                  </S.ChannelSlider>
                  <S.ChannelSlider channel="alpha">
                    <S.TransparencyGrid size="8px" />
                    <S.ChannelSliderTrack />
                    <S.ChannelSliderThumb />
                  </S.ChannelSlider>
                </Stack>
              </HStack>
              <HStack>
                <S.ChannelInput channel="hex" asChild>
                  <Input />
                </S.ChannelInput>
                <S.ChannelInput channel="alpha" asChild>
                  <Input />
                </S.ChannelInput>
              </HStack>
              <Stack gap="1.5">
                <Text>Saved Colors</Text>
                <S.SwatchGroup>
                  {presets.map((color, id) => (
                    <S.SwatchTrigger key={id} value={color}>
                      <S.Swatch value={color} />
                    </S.SwatchTrigger>
                  ))}
                </S.SwatchGroup>
              </Stack>
            </Stack>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}

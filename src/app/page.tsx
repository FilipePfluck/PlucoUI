'use client'

import { Combobox } from '@/components/primitives/forms/Combobox'

const data = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Vue', value: 'vue' },
]

export default function Home() {
  return <Combobox data={data} />
}

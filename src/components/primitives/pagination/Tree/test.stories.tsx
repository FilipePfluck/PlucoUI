import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

import { Tree } from '.'
import { createTreeCollection } from '@ark-ui/react'

type Story = StoryObj<typeof Tree>

const meta: Meta<typeof Tree> = {
  component: Tree,
  title: 'components/primitives/pagination/Tree/test',
  args: {},
}

export default meta

interface Node {
  id: string
  name: string
  children?: Node[]
}

const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: 'ROOT',
    name: '',
    children: [
      {
        id: 'node_modules',
        name: 'node_modules',
        children: [
          { id: 'node_modules/zag-js', name: 'zag-js' },
          { id: 'node_modules/pandacss', name: 'panda' },
          {
            id: 'node_modules/@types',
            name: '@types',
            children: [
              { id: 'node_modules/@types/react', name: 'react' },
              { id: 'node_modules/@types/react-dom', name: 'react-dom' },
            ],
          },
        ],
      },
      {
        id: 'src',
        name: 'src',
        children: [
          { id: 'src/app.tsx', name: 'app.tsx' },
          { id: 'src/index.ts', name: 'index.ts' },
        ],
      },
      { id: 'panda.config', name: 'panda.config.ts' },
      { id: 'package.json', name: 'package.json' },
      { id: 'renovate.json', name: 'renovate.json' },
      { id: 'readme.md', name: 'README.md' },
    ],
  },
})

export const ShouldSelectAnItem: Story = {
  args: { data: collection },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const Readme = canvas.getByRole('treeitem', { name: 'README.md' })

    await userEvent.click(Readme)

    expect(Readme).toHaveAttribute('aria-selected', 'true')
  },
}

export const ShouldExpandABranch: Story = {
  args: { data: collection },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const Src = canvas.getByRole('button', { name: 'src' })

    await userEvent.click(Src)

    const App = canvas.getByRole('treeitem', { name: 'app.tsx' })

    expect(App).toBeVisible()

    await userEvent.click(App)

    expect(App).toHaveAttribute('aria-selected', 'true')
  },
}

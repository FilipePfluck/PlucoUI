import type { Meta, StoryObj } from '@storybook/react'

import { TreeView, TreeViewData } from './index'

const meta: Meta<typeof TreeView> = {
  component: TreeView,
}

export default meta
type Story = StoryObj<typeof TreeView>

const data: TreeViewData = {
  label: 'Root',
  children: [
    {
      id: '1',
      name: 'Item 1',
      children: [
        {
          id: '1.1',
          name: 'Item 1.1',
        },
        {
          id: '1.2',
          name: 'Item 1.2',
          children: [
            {
              id: '1.2.1',
              name: 'Item 1.2.1',
            },
            {
              id: '1.2.2',
              name: 'Item 1.2.2',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Item 2',
      children: [
        {
          id: '2.1',
          name: 'Item 2.1',
        },
        {
          id: '2.2',
          name: 'Item 2.2',
        },
      ],
    },
    {
      id: '3',
      name: 'Item 3',
    },
  ],
}

export const TreeViewStory: Story = {
  args: {
    data,
  },
}

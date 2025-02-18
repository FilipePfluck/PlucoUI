'use client'

import {
  Button,
  ButtonProps,
} from '@/components/primitives/forms/buttons/Button'
import { css } from '@/styled-system/css'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'

export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

type SortingButtonProps = ButtonProps & {
  column: Column<Payment>
}

const SortingButton = ({ column, children, ...props }: SortingButtonProps) => {
  const columnSorting = column.getIsSorted()

  return (
    <Button
      intent="link"
      aria-label="Sort by alphabetic order"
      onClick={() => column.toggleSorting(columnSorting === 'asc')}
      {...props}
    >
      {children}
      {columnSorting === 'asc' && <ArrowUp size={16} />}
      {columnSorting === 'desc' && <ArrowDown size={16} />}
      {!columnSorting && <ArrowUpDown size={16} />}
    </Button>
  )
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <SortingButton css={{ pl: '0px' }} column={column}>
          Email
        </SortingButton>
      )
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <SortingButton css={{ ml: 'auto', pr: '0px' }} column={column}>
          Amount
        </SortingButton>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return <div className={css({ textAlign: 'end' })}>{formatted}</div>
    },
  },
]

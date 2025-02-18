'use client'

import { DataTable } from '../..'

import { columns, Payment } from './columns'

const items: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'ted@example.com',
  },
  {
    id: '7238e52f',
    amount: 999,
    status: 'failed',
    email: 'alice@example.com',
  },
  {
    id: '7eg5267',
    amount: 250,
    status: 'pending',
    email: 'bob@example.com',
  },
  {
    id: '228fd5g9',
    amount: 360,
    status: 'success',
    email: 'carol@example.com',
  },
]

export const PaymentsTable = () => {
  return <DataTable columns={columns} data={items} />
}

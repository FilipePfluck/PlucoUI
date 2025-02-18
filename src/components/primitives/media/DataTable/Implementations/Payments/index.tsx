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
  {
    id: '223eg52n',
    amount: 80,
    status: 'success',
    email: 'ted@example.com',
  },
  {
    id: 'asdjl18e52f',
    amount: 180,
    status: 'success',
    email: 'alice@example.com',
  },
  {
    id: '123jl98',
    amount: 230,
    status: 'pending',
    email: 'bob@example.com',
  },
  {
    id: 'alkdsff1',
    amount: 2500,
    status: 'processing',
    email: 'carol@example.com',
  },
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
    id: '7esdf123267',
    amount: 220,
    status: 'pending',
    email: 'bob@example.com',
  },
  {
    id: '2asdf1g9',
    amount: 360,
    status: 'success',
    email: 'carol@example.com',
  },
  {
    id: '223e978213n',
    amount: 80,
    status: 'failed',
    email: 'ted@example.com',
  },
  {
    id: 'as123e52f',
    amount: 120,
    status: 'success',
    email: 'alice@example.com',
  },
  {
    id: '1212378',
    amount: 220,
    status: 'pending',
    email: 'bob@example.com',
  },
  {
    id: 'alkd89231',
    amount: 25,
    status: 'processing',
    email: 'carol@example.com',
  },
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
  {
    id: '223eg52n',
    amount: 80,
    status: 'success',
    email: 'ted@example.com',
  },
  {
    id: 'a324jl52f',
    amount: 1800,
    status: 'success',
    email: 'alice@example.com',
  },
  {
    id: '12534398',
    amount: 2300,
    status: 'pending',
    email: 'bob@example.com',
  },
  {
    id: 'alkdsff1',
    amount: 2500,
    status: 'processing',
    email: 'carol@example.com',
  },
  {
    id: '7e2398267',
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
  {
    id: '223eg52n',
    amount: 890,
    status: 'success',
    email: 'ted@example.com',
  },
  {
    id: 'a324jl52f',
    amount: 1800,
    status: 'success',
    email: 'alice@example.com',
  },
  {
    id: '19283398',
    amount: 100,
    status: 'pending',
    email: 'bob@example.com',
  },
  {
    id: 'alk234dsff1',
    amount: 2500,
    status: 'processing',
    email: 'carol@example.com',
  },
]

export const PaymentsTable = () => {
  return <DataTable columns={columns} data={items} />
}

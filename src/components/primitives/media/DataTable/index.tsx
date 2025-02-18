'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from '@tanstack/react-table'

import * as S from '../Table/styles'
import { useState } from 'react'
import { Flex } from '@/styled-system/jsx'
import { css } from '@/styled-system/css'
import { Button } from '../../forms/buttons/Button'
import { Input } from '../../forms/inputs/Input'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <Flex direction="column" gap="4">
      <Input
        placeholder="Filter emails..."
        value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn('email')?.setFilterValue(event.target.value)
        }
      />
      <S.Root>
        <S.TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <S.TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <S.ColumnHeader key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </S.ColumnHeader>
                )
              })}
            </S.TableRow>
          ))}
        </S.TableHeader>
        <S.TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <S.TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <S.TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </S.TableCell>
                ))}
              </S.TableRow>
            ))
          ) : (
            <S.TableRow>
              <S.TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </S.TableCell>
            </S.TableRow>
          )}
        </S.TableBody>
      </S.Root>
      <Flex className={css({ align: 'center', justify: 'end', gap: '2' })}>
        <Button
          intent="secondary"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          intent="secondary"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  )
}

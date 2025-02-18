'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table'

import * as S from '../Table/styles'
import { useState } from 'react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
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
            <S.TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </S.TableCell>
          </S.TableRow>
        )}
      </S.TableBody>
    </S.Root>
  )
}

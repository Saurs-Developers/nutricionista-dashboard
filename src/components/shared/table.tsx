import React, { FC, ReactNode } from "react"
import clsx from "clsx"

interface IProps {
  children: ReactNode
  className?: string
}

interface ITableCellProps extends IProps {
  leftBorder?: boolean
  rightBorder?: boolean
}

interface TableComponents {
  Head: FC<IProps>
  HeadCell: FC<IProps>
  Body: FC<IProps>
  Row: FC<IProps>
  Cell: FC<ITableCellProps>
}

const Table: FC<IProps> & TableComponents = ({ children, className }) => (
  <table className={clsx(" w-full mt-8", className)}>{children}</table>
)

Table.Head = ({ children, className }: IProps) => (
  <thead>
    <tr className={clsx("text-left", className)}>{children}</tr>
  </thead>
)

Table.Head.displayName = "Table.Head"

Table.HeadCell = ({ children, className }: IProps) => (
  <th className={clsx("px-4 py-6 font-medium", className)}>{children}</th>
)

Table.HeadCell.displayName = "Table.HeadCell"

Table.Body = ({ children, className }: IProps) => (
  <tbody className={clsx("border-spacing-2", className)}>{children}</tbody>
)

Table.Body.displayName = "Table.Body"

Table.Row = ({ children, className }: IProps) => (
  <tr className={clsx("text-left text-slate-600 border-t-2", className)}>
    {children}
  </tr>
)

Table.Row.displayName = "Table.Row"

Table.Cell = ({
  children,
  leftBorder,
  rightBorder,
  className,
}: ITableCellProps) => {
  const cellDefaultStyles = "h-[68px] px-4 font-medium"
  const cellLeftBorderStyles = "border-l-2 rounded-l-[8px]"
  const cellRightBorderStyles = "border-r-2 rounded-r-[8px]"

  return (
    <td
      className={clsx(
        cellDefaultStyles,
        className,
        leftBorder && cellLeftBorderStyles,
        rightBorder && cellRightBorderStyles,
      )}
    >
      {children}
    </td>
  )
}

Table.Cell.displayName = "Table.Cell"

export { Table }

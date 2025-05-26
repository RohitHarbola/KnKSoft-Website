import * as React from "react";
import { cn } from "@/lib/utils";

// Table Root Component
const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
        <table
            ref={ref}
            className={cn(
                "w-full caption-bottom text-sm border-collapse",
                "bg-white dark:bg-gray-800",
                className
            )}
            {...props}
        />
    </div>
));
Table.displayName = "Table";

// Table Header
const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead
        ref={ref}
        className={cn(
            "bg-gray-50 dark:bg-gray-700",
            "[&_tr]:border-b border-gray-200 dark:border-gray-600",
            className
        )}
        {...props}
    />
));
TableHeader.displayName = "TableHeader";

// Table Body
const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn(
            "[&_tr:last-child]:border-0",
            "divide-y divide-gray-200 dark:divide-gray-700",
            className
        )}
        {...props}
    />
));
TableBody.displayName = "TableBody";

// Table Row
const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            "border-b transition-colors",
            "hover:bg-gray-50 dark:hover:bg-gray-700/50",
            "data-[state=selected]:bg-gray-100 dark:data-[state=selected]:bg-gray-800",
            className
        )}
        {...props}
    />
));
TableRow.displayName = "TableRow";

// Table Head Cell
const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            "h-12 px-4 text-left align-middle font-medium",
            "text-gray-600 dark:text-gray-300",
            "bg-gray-50 dark:bg-gray-700",
            "[&:has([role=checkbox])]:pr-0",
            "whitespace-nowrap",
            className
        )}
        {...props}
    />
));
TableHead.displayName = "TableHead";

// Table Cell
const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(
            "p-4 align-middle",
            "text-gray-900 dark:text-gray-100",
            "[&:has([role=checkbox])]:pr-0",
            className
        )}
        {...props}
    />
));
TableCell.displayName = "TableCell";

// Table Footer
const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            "border-t bg-gray-50/50 dark:bg-gray-800/50",
            "font-medium text-gray-900 dark:text-gray-100",
            className
        )}
        {...props}
    />
));
TableFooter.displayName = "TableFooter";

// Table Caption
const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn(
            "mt-4 text-sm text-gray-500 dark:text-gray-400",
            className
        )}
        {...props}
    />
));
TableCaption.displayName = "TableCaption";

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}; 

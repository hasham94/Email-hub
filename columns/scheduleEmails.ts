
import type { ColumnDef } from '@tanstack/vue-table'

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'recipient',
        header: () => h('div', { class: 'text-left' }, 'Recipient'),
        cell: ({ row }) => {
            const recipient: string = row.getValue('recipient')

            return h('div', { class: 'text-left' }, recipient);
        },
    },
    {
        accessorKey: 'subject',
        header: () => h('div', { class: 'text-left' }, 'Subject'),
        cell: ({ row }) => {
            const subject: string = row.getValue('subject')

            return h('div', { class: 'text-left' }, subject);
        },
    },
    {
        accessorKey: 'send_at',
        header: () => h('div', { class: 'text-left' }, 'Send At'),
        cell: ({ row }) => {
            const sendAt: string = row.getValue('send_at')
            const date = new Date(sendAt)

            // Format the date (e.g., MM/DD/YYYY HH:MM AM/PM)
            const formattedDate = date.toLocaleString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });

            return h('div', { class: 'text-left' }, formattedDate);
        },
    },
    {
        accessorKey: 'created_at',
        header: () => h('div', { class: 'text-left' }, 'Created At'),
        cell: ({ row }) => {
            const createdAt: string = row.getValue('created_at')
            const date = new Date(createdAt)

            // Format the date (e.g., MM/DD/YYYY HH:MM AM/PM)
            const formattedDate = date.toLocaleString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });

            return h('div', { class: 'text-left' }, formattedDate);
        },
    },
    {
        accessorKey: 'body',
        header: () => h('div', { class: 'text-left' }, 'Body'),
        cell: ({ row }) => {
            const body: string = row.getValue('body')

            return h('div', { class: 'text-left' }, body);
        },
    },
    {
        accessorKey: 'status',
        header: () => h('div', { class: 'text-left' }, 'Status'),
        cell: ({ row }) => {
            const status: string = row.getValue('status')
            let textColor = 'text-black'
            if (status === 'pending') {
                textColor = 'text-neutral-teint'
            } else if (status === 'failed') {
                textColor = 'text-red-500'
            }

            return h('div', { class: `text-left ${textColor}` }, status);
        },
    }
]
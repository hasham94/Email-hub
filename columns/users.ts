
import type { ColumnDef } from '@tanstack/vue-table'

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'user_name',
        header: () => h('div', { class: 'text-left' }, 'Name'),
        cell: ({ row }) => {
            const name: string = row.getValue('user_name')

            return h('div', { class: 'text-left' }, name);
        },
    },
    {
        accessorKey: 'email',
        header: () => h('div', { class: 'text-left' }, 'E-mail'),
        cell: ({ row }) => {
            const email: string = row.getValue('email')

            return h('div', { class: 'text-left' }, email);
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
        accessorKey: 'audience',
        header: () => h('div', { class: 'text-left' }, 'Audience'),
        cell: ({ row }) => {
            const audience: string = row.getValue('audience') || 'everyone'

            return h('div', { class: 'text-left' }, audience);
        },
    },
    {
        accessorKey: 'tags',
        header: () => h('div', { class: 'text-left' }, 'Tags'),
        cell: ({ row }) => {
            const tags: string = row.getValue('tags')

            return h('div', { class: 'text-left' }, tags);
        },
    }
]
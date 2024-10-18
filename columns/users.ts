
import type { ColumnDef } from '@tanstack/vue-table'

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'name',
        header: () => h('div', { class: 'text-left' }, 'Name'),
        cell: ({ row }) => {
            const name: string = row.getValue('name')

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
        accessorKey: 'createdAt',
        header: () => h('div', { class: 'text-left' }, 'Created At'),
        cell: ({ row }) => {
            const createdAt: string = row.getValue('createdAt')

            return h('div', { class: 'text-left' }, createdAt);
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
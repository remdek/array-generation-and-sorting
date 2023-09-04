export enum SelectValue {
    none = 'none',
    asc = 'asc',
    desc = 'desc',
}

export const labelAndValuesForSelect = [
    {label: 'Без сортировки', value: SelectValue.none},
    {label: 'Сортировать по возрастанию', value: SelectValue.asc},
    {label: 'Сортировать по убыванию', value: SelectValue.desc},
]
export enum SelectValue {
    None = 'none',
    Asc = 'asc',
    Desc = 'desc',
}

export const labelAndValuesForSelect = [
    {label: 'Без сортировки', value: SelectValue.None},
    {label: 'Сортировать по возрастанию', value: SelectValue.Asc},
    {label: 'Сортировать по убыванию', value: SelectValue.Desc},
]

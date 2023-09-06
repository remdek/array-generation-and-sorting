import { ref, computed } from 'vue';
import { SelectValue } from "@/constants";
import type { Item } from "@/types";

export const useSort = (columns: string[], items: Item[]) => {
  const sortDirection = ref<Record<string, SelectValue>>({});

  // Начальные значения "Без сортировки" по умолчанию для всех столбцов
  columns.forEach((column: string) => {
    sortDirection.value[column] = SelectValue.None;
  });

  //   Сброс сортировки столбцов
  const resetSortedColumns = (selectedColumn: string) => {
    for (const column in sortDirection.value) {
      if (column !== selectedColumn && sortDirection.value[column] !== SelectValue.None) {
        sortDirection.value[column] = SelectValue.None;
      }
    }
  };

  // Cортировка массива
  const sortedItems = computed(() => {
    const column = Object.keys(sortDirection.value).find(key => sortDirection.value[key] !== SelectValue.None);
    if (!column) {
      return items;
    }
    const direction = sortDirection.value[column];
    return [...items].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];
      if (direction === SelectValue.Asc) {
        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      } else if (direction === SelectValue.Desc) {
        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
      }
      return 0;
    });
  });

  return { sortDirection, resetSortedColumns, sortedItems };
}
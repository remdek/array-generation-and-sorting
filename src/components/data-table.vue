<template>
  <div>
    <input type="text" v-model="searchText" placeholder="Поиск"/>
    <table>
      <thead>
      <tr>
        <th v-for="column in columns" :key="column">
          <SortBy :items="labelAndValuesForSelect"
                  v-model="sortDirection[column]"
                  @update:modelValue="sortTable(column)"/>
          <label>
            <input type="checkbox" v-model="searchableColumns[column]"/>
            Участвует в поиске
          </label>
        </th>
      </tr>
      </thead>
      <TableBody
          :filtered-items="filteredItems"
          :columns="columns"
          :search-text="searchText"
          :searchable-columns="searchableColumns"/>
    </table>
    <!-- Отображение уведомления о совпадениях -->
    <div v-if="filteredItems.length === 0">Совпадений не найдено</div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import TableBody from "./table-body.vue";
import SortBy from "./sort-by.vue";
import {labelAndValuesForSelect, SelectValue} from "@/constants";
import type {Item} from "@/types";


const {items, columns} = defineProps(["items", "columns"]);


const searchText = ref<string>('');
const searchableColumns = ref<Record<string, boolean>>({});
const sortDirection = ref<Record<string, SelectValue>>({});


// Значение "Без сортировки" по умолчанию для всех столбцов
columns.forEach((column: string) => {
  sortDirection.value[column] = SelectValue.none;
});


const filteredItems = computed((): Item[] =>
    !searchText.value
        ? items
        : items.filter((item: Item) =>
            columns.some((column: string) => {
              const searchEnabled = searchableColumns.value[column];
              const itemValue = String(item[column]).toLowerCase();
              const query = searchText.value.toLowerCase();
              const isMatch = itemValue.includes(query);
              return searchEnabled && isMatch;
            })
        )
);

const resetOtherSelects = (selectedColumn: string): void => {
  for (const column in sortDirection.value) {
    if (column !== selectedColumn && sortDirection.value[column] !== SelectValue.none) {
      sortDirection.value[column] = SelectValue.none;
    }
  }
};

// Функция для сортировки массива

const sortTable = (column: string): void => {
  // Определение направления сортировки
  const direction = sortDirection.value[column];

  if (direction === SelectValue.none) {
    return; // Если нет сортировки, не выполняем ничего
  }
  // Установка остальных селектов в 'none'
  resetOtherSelects(column)

  filteredItems.value.sort((a, b) => {
    const valueA = a[column];
    const valueB = b[column];

    if (direction === SelectValue.asc) {
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    } else if (direction === SelectValue.desc) {
      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
    }
  });

};


</script>

<template>
  <div>
    <input type="text" v-model="searchText" placeholder="Поиск"/>
    <table>
      <thead>
      <tr>
        <th v-for="column in columns" :key="column">
          <BaseSelect :items="labelAndValuesForSelect"
            v-model="sortDirection[column]"
            @update:modelValue="resetSortedColumns(column)"
            :key="sortDirection[column]"
            />
            <br/>
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
    <div v-if="!filteredItems.length">Совпадений не найдено</div>
  </div>
</template>

<script setup lang="ts">
import {TableBody} from "./ui/";
import {BaseSelect} from "@/components/ui/";
import { labelAndValuesForSelect } from "@/constants";
import  {useFilter} from "@/composables/use-filter";
import  {useSort} from "@/composables/use-sort";
import type { Item } from "@/types";

interface Props {
  items: Item[]
}

const {items}  = defineProps<Props>();

const columns = Object.keys(items[0]);

const { sortDirection, resetSortedColumns, sortedItems } = useSort(columns, items);
const { searchText, searchableColumns, filteredItems } = useFilter(sortedItems, columns);

</script>
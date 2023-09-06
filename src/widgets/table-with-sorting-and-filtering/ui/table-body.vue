<template>
  <tbody>
  <tr v-for="item in filteredItems" :key="item.id">
    <td v-for="column in columns" :key="column">
      <!-- Подсветка совпадений -->
      <span
          v-html="highlightMatches(item[column], searchText)"
          v-if="searchableColumns[column]"
      ></span>
      <span v-else>{{ item[column] }}</span>
    </td>
  </tr>
  </tbody>
</template>

<script setup lang="ts">
defineProps(['filteredItems', 'columns', 'searchText', 'searchableColumns'])

const highlightMatches = (text: string | number, query: string): string => {
  if (!query) return String(text);
  const regex = new RegExp(`(${query})`, 'gi');
  return String(text).replace(regex, '<mark>$1</mark>');
};
</script>
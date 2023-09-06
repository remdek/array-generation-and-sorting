import type {Ref} from 'vue'
import { ref, computed } from 'vue';
import type { Item } from "@/types";

export const useFilter = (sortedItems: Ref<Item[]>, columns: string[]) => {
const searchText = ref<string>('');
const searchableColumns = ref<Record<string, boolean>>({});

const filteredItems = computed((): Item[] => {
    if (!searchText.value) return sortedItems.value;
    return sortedItems.value.filter((item: Item) =>
      columns.some((column: string) => {
        const searchEnabled = searchableColumns.value[column];
        const itemValue = String(item[column]).toLowerCase();
        const query = searchText.value.toLowerCase();
        return searchEnabled && itemValue.includes(query);
      })
    );
  });

  return { searchText, searchableColumns, filteredItems };
}
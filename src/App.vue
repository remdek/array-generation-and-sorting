<template>
  <div>
    <TableWithSortingAndFiltering :items="items"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {TableWithSortingAndFiltering} from "@/widgets/table-with-sorting-and-filtering/";
import { FieldGenerator } from "@/utils/field-generator";
import { ObjectGenerator } from "@/utils/object-generator";
import type { Item } from "@/types";

const items = ref<Item[]>([]);
const fieldGenerator = new FieldGenerator();

const objectGenerator = new ObjectGenerator(fieldGenerator, 1000);
  
items.value = objectGenerator.generateObjectsArray();



</script>

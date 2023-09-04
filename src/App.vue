<template>
  <div>
    <DataTable :items="items" :columns="tableColumns"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import DataTable from "@/components/data-table.vue";
import {FieldGenerator} from "@/utils/field-generator";
import {ObjectGenerator} from "@/utils/object-generator";
import type {Item} from "@/types";

const fieldGenerator = new FieldGenerator();
const objectGenerator = new ObjectGenerator(fieldGenerator, 1000);

const items = ref<Item[]>([]);
const tableColumns = ref<string[]>([]);

items.value = objectGenerator.generateObjectsArray();
const sampleObject = items.value[0];
tableColumns.value = Object.keys(sampleObject);

</script>

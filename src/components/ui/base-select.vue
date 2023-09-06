<template>
  <select v-model="localModelValue">
    <option :value="item.value" v-for="item in items" :key="item.value">{{item.label}}</option>
  </select>
</template>

<script setup lang="ts">
import {computed} from "vue";

interface Select {
  label: string,
  value: string | number
}
interface Props {
  modelValue: Select['value'];
  items: Select[]
}

interface Emits {
  (e: 'update:model-value', value: Props['modelValue']): void;
}

const {modelValue, items} = defineProps<Props>()

const emits = defineEmits<Emits>();

const localModelValue = computed({
  get() {
    return modelValue;
  },
  set(value) {
    emits('update:model-value', value);
  },
});


</script>
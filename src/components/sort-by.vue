<template>
  <select v-model="localModelValue">
    <option :value="item.value" v-for="(item, index) in items" :key="index">{{item.label}}</option>
  </select>
</template>

<script setup lang="ts">
import {computed} from "vue";

interface Select {
  label: string,
  value: string | number | boolean
}
interface Props {
  modelValue: string | number | boolean;
  items: Select[]
}

interface Emits {
  (e: 'update:model-value', value: Props['modelValue']): void;
}

const props = defineProps<Props>()

const emits = defineEmits<Emits>();

const localModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:model-value', value);
  },
});


</script>
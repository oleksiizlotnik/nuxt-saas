<script lang="ts" setup>
import type { CanbanColumn, Contacts } from '~/lib/definitions';
import { groupBy as groupByLodash } from 'lodash';
import { ref } from 'vue';

interface CanbanBoardProps {
  groupBy: keyof Contacts;
  data: Contacts[]
}

const props = defineProps<CanbanBoardProps>();

const localData = ref<Contacts[] | Record<string, Contacts[]>>([] as Contacts[])
const localColumns = ref<CanbanColumn[]>([])

const groupData = (): void => {
  if (props.groupBy) {
    const groupedData = groupByLodash(props.data, props.groupBy);
    localData.value = groupedData;
  } else {
    localData.value = props.data;
  }
}

const prepareColumns = (): void => {
  // Check if localData.value is an object (grouped data)
  if (typeof localData.value === 'object' && !Array.isArray(localData.value)) {
    const names = Object.keys(localData.value)
    const columns: CanbanColumn[] = names.map((columnName: string, index: number) => {
      return {
        name: columnName,
        data: (localData.value as Record<string, Contacts[]>)[columnName] || []
      }
    })

    localColumns.value = columns
  }
}

onMounted(() => {
  if (props.data) {
    groupData();
    prepareColumns()
  }
})
</script>

<template>
<div class="canban-board">
  <CanbanColumn v-for="(column, index) in localColumns" :key="index" :name="column.name" :data="column.data" />
</div>
</template>


<style>
.canban-board {
  @apply flex overflow-x-auto w-full;
  gap: 1.25rem;
}
</style>
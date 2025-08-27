<script lang="ts" setup>
import { Card, CardContent } from '~/components/ui/card';
import type { CanbanColumn } from '~/lib/definitions';
import { useVirtualList } from '@vueuse/core'
import { computed } from 'vue'

const props = defineProps<CanbanColumn>();

// Create a computed ref for the data to ensure reactivity
const dataSource = computed(() => props.data || [])

const { list, containerProps, wrapperProps } = useVirtualList(
  dataSource,
  {
    itemHeight: 140, // Adjust this based on your card height
  },
)

const handleCardClick = (e: MouseEvent): void => {
  // Find the closest card element using event delegation
  const cardElement = (e.target as Element).closest('[data-contact-id]');

  if (cardElement) {
    const contactId = cardElement.getAttribute('data-contact-id');
    console.log('you clicked on card with id: ', contactId)
  }
}
</script>

<template>
<Card class="canban-column min-w-full w-full md:min-w-[60%] md:w-[60%] lg:min-w-[auto] lg:w-96">
  <CardContent class="space-y-3">
    <CanbanColumnInfo :name="props.name" />

    <!-- Virtual List Implementation -->
    <div v-bind="containerProps" class="flex-1 min-h-0 overflow-y-auto">
      <div v-bind="wrapperProps" @click="(e) => handleCardClick(e)" class="space-y-3">
        <CanbanColumnCard v-for="item in list" :key="item.data.id" :card="item.data" />
      </div>
    </div>
  </CardContent>
</Card>
</template>


<style>
.canban-column {
  @apply max-h-screen overflow-y-scroll;
}
</style>
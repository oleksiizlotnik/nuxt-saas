<script lang="ts" setup>
import { capitalize } from 'vue';
const props = defineProps<{
  name: string,
  count?: number
}>()
</script>
<template>
<div class="canban-column__info bg-white py-5 h-[50px] z-10">
  <h3>{{ capitalize(props.name) }}</h3>
  <!-- <span class="text-sm text-gray-400">filter here</span> -->
  <span v-if="count" class="text-sm text-gray-400">Count: {{ props.count }}</span>
</div>
</template>


<style>
.canban-column__info {
  @apply flex items-center justify-between sticky;
  top: 0;
}
</style>
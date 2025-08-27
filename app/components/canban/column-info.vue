<script lang="ts" setup>
import { capitalize } from 'vue';
const props = defineProps<{
  name: string
}>()
</script>
<template>
<div class="canban-column__info">
  <h3>{{ capitalize(props.name) }}</h3>
  <span class="text-sm text-gray-400">filter here</span>
</div>
</template>


<style>
.canban-column__info {
  @apply flex items-center justify-between sticky;
  top: 0;
}
</style>
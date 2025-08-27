<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const id = computed(() => route.params?.id)
</script>
<template>
<div>
  contacts view - {{ id }}
</div>
</template>


<style></style>
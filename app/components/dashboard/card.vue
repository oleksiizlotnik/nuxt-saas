<script lang="ts" setup>
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';

interface DashboardCardProps {
  title?: string;
}

const props = withDefaults(defineProps<DashboardCardProps>(), {
  title: 'Title'
})

</script>
<template>
<Card>
  <CardContent>
    <CardTitle>{{ props.title }}</CardTitle>
    <div class="py-4">
      <slot />
    </div>
  </CardContent>
  <CardFooter v-if="$slots.footer">
    <slot name="footer" />
  </CardFooter>
</Card>
</template>

<style></style>
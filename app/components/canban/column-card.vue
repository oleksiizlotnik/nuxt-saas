<script lang="ts" setup>
import type { Contacts } from '~/lib/definitions';
import { Card, CardContent } from '~/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { formatUserName } from '~/lib/utils';
import { computed } from 'vue';


const props = defineProps<{
  card: Contacts
}>();

const hasTags = computed(() => {
  return props.card.tags?.length > 0
})
</script>

<template>
<Card class="canban-column__card" :data-contact-id="props.card.id">
  <CardContent class="text-sm space-y-2 flex flex-col">
    <div class="flex gap-2 items-center">
      <Avatar>
        <AvatarImage :src="props.card.avatar" :alt="props.card.name" />
        <AvatarFallback>{{ formatUserName(props.card).initials }}</AvatarFallback>
      </Avatar>
      <span>{{ props.card.name }}</span>
    </div>
    <span class="text-gray-400">{{ props.card.email }}</span>
    <Badge v-if="hasTags">{{ props.card.tags[0] }}</Badge>
  </CardContent>
</Card>
</template>


<style></style>
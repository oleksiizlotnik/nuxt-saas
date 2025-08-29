<script lang="ts" setup>
import { computed } from 'vue';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { formatUserName, formatDateToTimeAgo } from '~/lib/utils';
import type { Activity } from '~/lib/definitions';

interface ActivityTableProps {
  data?: Activity[]
}

const props = defineProps<ActivityTableProps>()

const activityCount = computed<number | undefined>(() => props.data?.length)

// Expose computed property for testing
defineExpose({
  activityCount
})
</script>

<template>
<DashboardCard title="Activity">
  <div v-if="!activityCount || activityCount === 0" class="pt-2">
    No activities yet
  </div>
  <div v-for="(item, index) in props.data" v-else :key="item.id" class="activity relative">
    <div class="activity-item flex gap-1 py-6 items-center flex-wrap">
      <Avatar>
        <AvatarFallback>{{ formatUserName(item.user).initials }}</AvatarFallback>
      </Avatar>
      <span>{{ formatUserName(item.user).fullName }}</span>
      <span class="text-gray-500">{{ item.action }}</span>
      <span>·</span>
      <span class="text-gray-500">{{ formatDateToTimeAgo(item.time) }}</span>
    </div>
    <div v-if="activityCount && index !== activityCount - 1" class="activity-separator" />
  </div>
</DashboardCard>
</template>

<style scoped>
.activity-separator {
  display: block;
  width: 1.5rem;
  height: 1px;
  background: #ccc;
  transform: rotate(90deg);
  position: absolute;
  bottom: 0;
  left: 4px;
}
</style>
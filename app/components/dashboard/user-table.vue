<script setup lang="ts">
import type { Payment } from '~/lib/definitions';
import { Badge } from '../ui/badge';
import { capitalize } from 'vue';

interface UserTableProps {
  data: Payment[]
}

const props = defineProps<UserTableProps>()
</script>

<template>
<DashboardCard title="User Payments">
  <table class="table-auto md:table-fixed w-full">
    <thead>
      <tr>
        <td>Email</td>
        <td>Amount</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.data" :key="item.id">
        <td>{{ item.email }}</td>
        <td>{{ item.amount }}</td>
        <td>
          <Badge variant="secondary">{{ capitalize(item.status) }}</Badge>
        </td>
      </tr>
    </tbody>
  </table>
</DashboardCard>
</template>

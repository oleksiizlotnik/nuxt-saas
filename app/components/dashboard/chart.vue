<script lang="ts" setup>
import type { ProfitChartData } from '~/lib/definitions';
import { AreaChart } from '../ui/chart-area';

interface UserTableProps {
  data: ProfitChartData[]
}

const props = defineProps<UserTableProps>()

</script>
<template>
<DashboardCard title="Profit: fact vs prediction">
  <AreaChart :data="props.data" index="name" :categories="['total', 'predicted']" />
</DashboardCard>
</template>


<style></style>
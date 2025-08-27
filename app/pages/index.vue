<script lang="ts" setup>
import { activityData, paymentData, chartData } from '~/assets/mock-data';

const { device } = useUseScreenSize()
</script>

<template>
<div class="grid grid-cols-2 gap-8">
  <p>your device is {{ device }}</p>
  <section class="col-span-2">
    <DashboardChart :data="chartData" />
  </section>
  <section class="col-span-2 lg:col-span-1">
    <DashboardUserTable :data="paymentData" />
  </section>
  <section class="col-span-2 lg:col-span-1">
    <DashboardActivityTable :data="activityData" />
  </section>
</div>
</template>

<style></style>
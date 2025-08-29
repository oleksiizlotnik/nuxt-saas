<script lang="ts" setup>
import { contactsData } from '~/assets/mock-data';

definePageMeta({
  layout: 'contacts'
})

const leads = Object.values(contactsData).filter(item => item.type === 'lead')

</script>
<template>
<div>
  <CanbanBoard :data="leads" group-by="status" />
</div>
</template>

<style></style>
<script lang="ts" setup>
import { contactsData } from '~/assets/mock-data';

definePageMeta({
  layout: 'contacts'
})

const leads = Object.values(contactsData).filter(item => item.type === 'lead')

</script>
<template>
<div>
  contacts leads
  count: {{ leads.length }}
</div>
</template>

<style></style>
<script lang="ts" setup>
import { contactsData } from '~/assets/mock-data';

definePageMeta({
  layout: 'contacts'
})

const customers = Object.values(contactsData).filter(item => item.type === 'customer')

</script>
<template>
<div>
  contacts customers
  count: {{ customers.length }}
</div>
</template>

<style></style>
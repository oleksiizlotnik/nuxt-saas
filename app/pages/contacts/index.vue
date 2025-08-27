<script lang="ts" setup>
import { contactsData } from '~/assets/mock-data';

definePageMeta({
  layout: 'contacts'
})

const contacts = Object.keys(contactsData)

</script>
<template>
<div>
  contacts index
  count: {{ contacts.length }}

  <CanbanBoard :data="contactsData" group-by="status" />
</div>
</template>

<style></style>
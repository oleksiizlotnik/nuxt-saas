<script lang="ts" setup>
import { contactsData } from '~/assets/mock-data';

definePageMeta({
  layout: 'contacts'
})

const contacts = Object.values(contactsData)

</script>
<template>
<div>
  <CanbanBoard :data="contacts" group-by="status" />
</div>
</template>

<style></style>
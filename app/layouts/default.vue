<script lang="ts" setup>
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

</script>

<template>
<div>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full">
      <div class="p-4 h-full w-full">
        <SidebarTrigger />
        <div class="page py-4 pl-1 h-full">
          <slot />
        </div>
      </div>
    </main>
  </SidebarProvider>
  <AppFooter />
</div>
</template>


<style></style>
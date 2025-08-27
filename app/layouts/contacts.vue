<script lang="ts" setup>
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

interface Links {
  name: string;
  url: string;
}

const links = ref<Links[]>([
  { name: 'All', url: '/contacts' },
  { name: 'Leads', url: '/contacts/leads' },
  { name: 'Customers', url: '/contacts/customers' },
])

const changePage = (page: string) => {
  if (page && route.path !== page) {
    navigateTo(page as string)
  }
}

</script>

<template>
<div>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full">
      <div class="bg-muted p-4 h-full w-full">
        <SidebarTrigger />
        <div class="page py-4 pl-1 h-full">
          <ToggleGroup type="single" class="w-full md:w-[300px]" variant="default"
            @update:model-value="(page) => changePage(page as string)">
            <ToggleGroupItem v-for="(link, index) in links" :key="index" :value="link.url" :aria-label="link.name"
              :disabled="route.path === link.url"
              class="bg-foreground text-white border-foreground border cursor-pointer disabled:cursor-not-allowed">
              {{ link.name }}
            </ToggleGroupItem>
          </ToggleGroup>
          <slot />
        </div>
      </div>
    </main>
  </SidebarProvider>
  <AppFooter />
</div>
</template>


<style></style>
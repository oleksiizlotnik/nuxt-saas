<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { Home, Inbox, Plus, FileQuestionMark } from 'lucide-vue-next';
import type { ISidebarMenu } from '~/lib/definitions';

const appMenu: ISidebarMenu[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Contacts",
    url: "/contacts",
    icon: Inbox,
  },
];

const supportMenu: ISidebarMenu[] = [
  {
    title: "Invite people",
    url: '#',
    icon: Plus
  },
  {
    title: "Help & support",
    url: '#',
    icon: FileQuestionMark
  },
]
</script>

<template>
<Sidebar>
  <SidebarHeader />
  <SidebarContent>
    <!-- App Menu -->
    <SidebarGroup>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem v-for="item in appMenu" :key="item.title">
            <SidebarMenuButton asChild>
              <NuxtLink :to="item.url">
                <component :is="item.icon" />
                <span>{{ item.title }}</span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
    <SidebarGroup>
      <SidebarGroupLabel>Tags</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          to be added
          <!-- <SidebarMenuItem v-for="item in appMenu" :key="item.title">
            <SidebarMenuButton asChild>
              <NuxtLink :to="item.url">
                <component :is="item.icon" />
                <span>{{ item.title }}</span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem> -->
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
    <!-- Settings menu -->
    <SidebarMenu class="mt-auto">
      <SidebarMenuItem v-for="item in supportMenu" :key="item.title">
        <SidebarMenuButton asChild>
          <NuxtLink :to="item.url">
            <component :is="item.icon" />
            <span>{{ item.title }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
  <SidebarFooter />
</Sidebar>
</template>
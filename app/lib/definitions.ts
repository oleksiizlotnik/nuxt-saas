import type { Component } from "vue";

export interface ISidebarMenu {
  title: string;
  url: string;
  icon?: Component;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

export interface Activity {
  id: string;
  user: User;
  action: string;
  time: Date;
}

export interface ProfitChartData {
  name: string; // month
  total: number;
  predicted: number;
}

export interface Contacts {
  id: string;
  type: "customer" | "lead";
  avatar: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  status: "active" | "inactive" | "pending" | "new";
  tags: string[];
  createdAt: string;
  updatedAt: string;
  sortOrder?: number;
}

export interface ContactsWithKeys {
  [key: string]: Contacts;
}

export interface CanbanColumn {
  name: string;
  data: Contacts[];
}

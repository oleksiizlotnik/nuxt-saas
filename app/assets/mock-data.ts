import type { Activity, Payment, ProfitChartData } from "~/lib/definitions";

export const activityData: Activity[] = [
  {
    id: "m5gr84i9",
    user: {
      id: "m5gr84i9",
      firstName: "Ken",
      lastName: "Thompson",
    },
    action: "upgraded to Pro",
    time: new Date("2025-08-26T10:00:00Z"),
  },
  {
    id: "3u1reuv4",
    user: {
      id: "3u1reuv4",
      firstName: "Abe",
      lastName: "Thompson",
    },
    action: "signed up",
    time: new Date("2025-08-24T10:00:00Z"),
  },
  {
    id: "derv1ws0",
    user: {
      id: "derv1ws0",
      firstName: "Monserrat",
      lastName: "Thompson",
    },
    action: "signed up",
    time: new Date("2025-07-23T10:00:00Z"),
  },
  {
    id: "5kma53ae",
    user: {
      id: "5kma53ae",
      firstName: "Silas",
      lastName: "Thompson",
    },
    action: "upgraded to Pro",
    time: new Date("2025-07-24T10:00:00Z"),
  },
  {
    id: "bhqecj4p",
    user: {
      id: "bhqecj4p",
      firstName: "Carmella",
      lastName: "Thompson",
    },
    action: "signed up",
    time: new Date("2025-06-26T10:00:00Z"),
  },
];

export const paymentData: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

export const chartData: ProfitChartData[] = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
];

import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { User } from "~/lib/definitions";
import {
  useDateFormat,
  formatTimeAgoIntl,
  type UseDateFormatReturn,
} from "@vueuse/core";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatUserName = (
  user: User
): { initials: string; fullName: string } => {
  const nameArr = [user.firstName, user.lastName];
  const initialsArr = nameArr.map((name) => name.slice(0, 1));

  return {
    initials: initialsArr.join(""),
    fullName: nameArr.join(" "),
  };
};

export const formatDate = (date: Date): UseDateFormatReturn => {
  return useDateFormat(date, "YYYY-MM-DD (ddd)", { locales: "en-US" });
};

export const formatDateToTimeAgo = (date: Date): string => {
  return formatTimeAgoIntl(date, { locale: "en" });
};

import { test, expect, describe } from "vitest";
import {
  formatUserName,
  formatDate,
  formatDateToTimeAgo,
} from "../../lib/utils";

const mockUser = {
  id: "1",
  firstName: "John",
  lastName: "Smith",
};

const mockDate = new Date("1995-12-17T03:24:00");

describe("Utils.ts", () => {
  // formatUserName
  test("Get full name from user object", () => {
    expect(formatUserName(mockUser).fullName).toBe("John Smith");
  });

  test("Get initials from user object", () => {
    expect(formatUserName(mockUser).initials).toBe("JS");
  });

  // formatDate
  test("Format date to YYYY-MM-DD (ddd)", () => {
    expect(formatDate(mockDate).value).toBe("1995-12-17 (Sun)");
  });

  // formatDateToTimeAgo
  test("Format date to time ago string", () => {
    const result = formatDateToTimeAgo(mockDate);

    expect(typeof result).toBe("string");
    expect(result).toContain("ago");
  });
});

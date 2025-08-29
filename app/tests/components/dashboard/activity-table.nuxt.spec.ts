// imports
import { test, describe, expect, beforeEach } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import ActivityTable from "~/components/dashboard/activity-table.vue";
import type { User, Activity } from "~/lib/definitions";

// mock components
const mockDashboardCard = {
  name: "DashboardCard",
  template: "<div class='card'><p>{{title}}</p><slot /></div>",
  props: ["title"],
};

const mockAvatar = {
  name: "Avatar",
  template: "<div class='avatar'><slot /></div>",
};

const mockAvatarFallback = {
  name: "AvatarFallback",
  template: "<div class='avatar-fallback'><slot /></div>",
};

// tests
describe("ActivityTable", () => {
  let wrapper: VueWrapper<InstanceType<typeof ActivityTable>>;
  let mockActivities: Activity[];

  // set mock data
  beforeEach(() => {
    const mockUser1: User = {
      id: "1",
      firstName: "John",
      lastName: "Smith",
    };

    const mockUser2: User = {
      id: "2",
      firstName: "Labubu",
      lastName: "Johnson",
    };

    const mockUser3: User = {
      id: "3",
      firstName: "James",
      lastName: "Bond",
    };

    mockActivities = [
      {
        id: "1",
        user: mockUser1,
        action: "Created an account",
        time: new Date("2024-01-15T10:00:00Z"),
      },
      {
        id: "2",
        user: mockUser2,
        action: "Upgraded to Pro account",
        time: new Date("2024-01-15T09:30:00Z"),
      },
      {
        id: "3",
        user: mockUser3,
        action: "Created a new workspace",
        time: new Date("2024-01-10T09:30:00Z"),
      },
    ];
  });

  // mountComponent with global components
  const mountComponent = (props = {}) => {
    return mount(ActivityTable, {
      props,
      global: {
        components: {
          DashboardCard: mockDashboardCard,
          Avatar: mockAvatar,
          AvatarFallback: mockAvatarFallback,
        },
      },
    });
  };

  describe("Rendering", () => {
    test("renders with activities", () => {
      wrapper = mountComponent({ data: mockActivities });

      expect(wrapper.text()).toContain("John Smith");
      expect(wrapper.text()).toContain("Labubu Johnson");
      expect(wrapper.text()).toContain("James Bond");
      expect(wrapper.text()).toContain("Created an account");
      expect(wrapper.text()).toContain("Upgraded to Pro account");
      expect(wrapper.text()).toContain("Created a new workspace");
    });

    test("renders separator between items", () => {
      wrapper = mountComponent({ data: mockActivities });

      const separators = wrapper.findAll(".activity-separator");
      expect(separators).toHaveLength(2);
    });

    test("renders initials for each user avatar", () => {
      wrapper = mountComponent({ data: mockActivities });

      expect(wrapper.text()).toContain("JS");
      expect(wrapper.text()).toContain("LJ");
      expect(wrapper.text()).toContain("JB");
    });
  });

  describe("Props and Data", () => {
    test("Shows empty message, when no data passed", () => {
      wrapper = mountComponent();
      expect(wrapper.text()).toContain("No activities yet");
    });

    test("Shows empty message, when data is empty array", () => {
      wrapper = mountComponent({ data: [] });
      expect(wrapper.text()).toContain("No activities yet");
    });

    test("Shows empty message, when data is undefined", () => {
      wrapper = mountComponent({ data: undefined });
      expect(wrapper.text()).toContain("No activities yet");
    });

    test("Renders single activity without separator", () => {
      wrapper = mountComponent({ data: [mockActivities[0]] });

      const separator = wrapper.findAll(".activity-separator");
      expect(separator).toHaveLength(0);
    });
  });

  describe("Computed properties", () => {
    test("activityCount returns a correct count", () => {
      wrapper = mountComponent({ data: mockActivities });
      const vm = wrapper.vm;
      expect(vm.activityCount).toBe(3);
    });

    test.todo("test other computed if there are any");
  });
});

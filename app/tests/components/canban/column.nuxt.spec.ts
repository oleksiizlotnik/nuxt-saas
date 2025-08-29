import { test, describe, expect, vi } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { nextTick } from "vue";

import type { CanbanColumn } from "~/lib/definitions";
import Column from "~/components/canban/column.vue";
import { contactsData } from "~/assets/mock-data";

vi.mock("~/components/ui/card/Card.vue", () => ({
  default: {
    name: "Card",
    template: "<div class='card'><slot /></div>",
  },
}));

vi.mock("~/components/ui/card/CardContent.vue", () => ({
  default: {
    name: "CardContent",
    template: "<div class='card-content'><slot /></div>",
  },
}));

vi.mock("~/components/canban/column-info.vue", () => ({
  default: {
    name: "CanbanColumnInfo",
    template: "<div class='canban-column-info'>{{name}}</div>",
    props: ["name"],
  },
}));

vi.mock("~/components/canban/column-card.vue", () => ({
  default: {
    name: "CanbanColumnCard",
    template:
      "<div class='canban-column-card' :id='card.id' :data-contact-id='card.id'>{{card.name}}</div>",
    props: ["card"],
  },
}));

const mockContacts = Object.values(contactsData).slice(0, 3);

describe("CanbanColumn", () => {
  let wrapper: VueWrapper<InstanceType<typeof Column>>;

  // mountComponent
  const mountComponent = (props: CanbanColumn) => {
    return mount(Column, {
      props,
    });
  };

  describe("Rendering", () => {
    test("renders column info", () => {
      wrapper = mountComponent({ name: "Column name", data: mockContacts });
      const infoPanel = wrapper.findAll(".canban-column-info");

      expect(infoPanel).toHaveLength(1);
      expect(infoPanel[0]?.text()).toContain("Column name");
    });

    test("renders column cards", async () => {
      wrapper = mountComponent({ name: "Column name", data: mockContacts });
      await nextTick();

      const cards = wrapper.findAll(".canban-column-card");
      expect(cards).toHaveLength(mockContacts.length);
    });

    test("handles children click correctly", async () => {
      wrapper = mountComponent({ name: "Column name", data: mockContacts });
      const vm = wrapper.vm;
      await nextTick();

      const card = wrapper.find(".canban-column-card");
      const cartId = card.attributes("data-contact-id");
      await card.trigger("click");

      expect(cartId).toEqual(vm.activeCardId);
    });
  });

  describe("Props", () => {
    test.todo("shows empty message when data is empty array");
    test.todo("shows empty message when data is not provided");
    test.todo("shows empty message when data is undefined");
  });
});

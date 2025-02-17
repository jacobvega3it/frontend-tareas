import { describe, test, expect } from "vitest";
import HomeView from "@/views/HomeView.vue";
import { mount } from "@vue/test-utils";

describe("HomeView", () => {

    test("renders component correctly", () => {
        const wrapper = mount(HomeView);
        expect(wrapper.find("h1").exists()).toBe(true);
    });

    test("show home page data", () => {
        const wrapper = mount(HomeView);
        expect(wrapper.find("p").text()).toBe("Esta es la página de inicio");
    });

});


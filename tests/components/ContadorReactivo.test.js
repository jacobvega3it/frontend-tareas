import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ContadorReactivo from "@/components/ContadorReactivo.vue";

describe("ContadorRectivo", () => {

    test("renders component correctly", () => {
        const wrapper = mount(ContadorReactivo); 
        expect(wrapper.find("h1").exists()).toBe(true);
    });

    test('increments the counter when button is clicked', async () => {
        const wrapper = mount(ContadorReactivo);
        const button = wrapper.find('button');

        await button.trigger('click');
        expect(wrapper.find('p').text()).toBe('El valor del contador es: 1');
    });

});


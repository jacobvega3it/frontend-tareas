import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ListadoTareas from "@/components/ListadoTareas.vue";

describe("GestionTareas", () => {

    const wrapper = mount(ListadoTareas); 

    test("renders component correctly", () => {
        expect(wrapper.find("h1").exists()).toBe(true);
        expect(wrapper.findAll("li").length).toBe(5);
    });

    test('create task', async () => {
        const input = wrapper.find('input');
        await input.setValue('Aprender pruebas unitarias');
        await input.trigger('keyup.enter');
        expect(wrapper.findAll('li').length).toBe(6);
    });

});



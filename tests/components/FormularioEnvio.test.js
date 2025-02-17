import FormularioEnvio from "@/components/FormularioEnvio.vue";
import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

describe("FormularioEnvio", () => {

    test("should match snapshot", () => {
        const wrapper = mount(FormularioEnvio); 
        console.log(wrapper.html());
        expect(wrapper.html()).toMatchSnapshot();
    });

    test("renders form correctly", () => {
        const wrapper = mount(FormularioEnvio); 
        expect(wrapper.find("form").exists()).toBe(true);
        expect(wrapper.find("button").text()).contains("Enviar");
        expect(wrapper.find('input').exists()).toBe(true);
    });

});

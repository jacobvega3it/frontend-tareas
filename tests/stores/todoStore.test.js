import { beforeEach, describe, test, expect } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useTodoStore } from "../../src/stores/todoStore";

describe("TodoStore", ()   => {

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test("should add a todo", () => {
        const { todos } = useTodoStore();
        expect(todos).toHaveLength(0);
    });

    test("should add a todo", () => {
        const { agregarTarea, todos } = useTodoStore();
        agregarTarea("Hacer la compra");
        expect(todos).toHaveLength(1);
    });

    test("should change the todo state", () => {
        const { agregarTarea, alternarEstado, todos } = useTodoStore();
        agregarTarea("Hacer la compra");
        alternarEstado(todos[0].id);
        expect(todos[0].completado).toBe(true);
    });
});
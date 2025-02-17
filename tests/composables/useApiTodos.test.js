import { describe, test, expect } from "vitest";
import useApiTodos from "@/composables/useApiTodos";

describe("useApiTodos", () => {
    test("obtenerTodos", async () => {
        const { obtenerTodos } = useApiTodos();
        const data = await obtenerTodos();
        expect(data.todos.length).toBe(30);
    });

});


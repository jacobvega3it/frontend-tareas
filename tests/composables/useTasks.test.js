import { describe, test, expect } from "vitest";
import { useTasks } from "@/composables/useTasks";

describe("useTasks", () => {
    test('initializes tasks with provided initial value', () => {
        const { tasks } = useTasks();
        expect(tasks.value).toEqual([
            { text: 'Escribir código limpio', done: false },
            { text: 'Aprender Vue 3', done: false },
            { text: 'Desplegar una aplicación', done: false },
            { text: 'Aprender Vuex', done: true },
        ]);
    });

    test('verify taskNames', () => {
        const { taskNames } = useTasks();
        expect(taskNames).toEqual([
            'Escribir código limpio',
            'Aprender Vue 3',
            'Desplegar una aplicación',
            'Aprender Vuex'
        ]);
    });

    test('verify totalTasks', () => {
        const { totalTasks } = useTasks();
        expect(totalTasks).toBe(4);
    });

});
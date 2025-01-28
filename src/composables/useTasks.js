import { ref } from 'vue';

export function useTasks() {
    const tasks = ref([
        { text: 'Escribir código limpio', done: false },
        { text: 'Aprender Vue 3', done: false },
        { text: 'Desplegar una aplicación', done: false },
        { text: 'Aprender Vuex', done: true },
    ]);

    const editingTask = ref(null);

    const addTask = (task) => tasks.value.push(task);

    const saveTask = (index, text) => {
        tasks.value[index].text = text;
        editingTask.value = null;
    };

    const removeTask = (index) => {
        tasks.value.splice(index, 1);
    };

    const editTask = (index) => {
        editingTask.value = index;
    };

    const completedTasks = tasks.value.filter(task => task.done);

    const taskNames = tasks.value.map(task => task.text);

    const totalTasks = tasks.value.reduce((count) => count + 1, 0);

    const tasksOrdered = tasks.value.slice().sort((a, b) => a.text.localeCompare(b.text));

    const firstCompleted = tasks.value.find(task => task.done);

    const firstIndexCompleted = tasks.value.findIndex(task => task.done);

    const readTasks = () => {
        tasks.value.forEach(task => console.log(task.text));
    };

    const hasCompleted = tasks.value.some(task => task.done);

    return { tasks, addTask, editingTask, saveTask, removeTask, editTask, completedTasks, taskNames, totalTasks, 
        tasksOrdered, firstCompleted, firstIndexCompleted, readTasks, hasCompleted };

}


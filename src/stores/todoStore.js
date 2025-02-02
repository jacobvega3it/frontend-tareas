import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [],
  }),
  
  actions: {
    agregarTarea(nuevaTarea) {
      this.todos.push({ id: Date.now(), texto: nuevaTarea, completado: false });
    },
    eliminarTarea(id) {
      this.todos = this.todos.filter(tarea => tarea.id !== id);
    },
    alternarEstado(id) {
      const tarea = this.todos.find(t => t.id === id);
      if (tarea) tarea.completado = !tarea.completado;
    }
  },

  getters: {
    tareasCompletadas() {
      return this.todos.filter(t => t.completado);
    },
    tareasPendientes() {
      return this.todos.filter(t => !t.completado);
    }
  }
});

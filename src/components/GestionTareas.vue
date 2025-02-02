<template>
    <div>
      <h1>Lista de Tareas</h1>
      
      <input v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="Agregar tarea" />
      <button @click="agregarTarea">Agregar</button>
  
      <ul>
        <li v-for="tarea in todoStore.todos" :key="tarea.id">
          <input type="checkbox" v-model="tarea.completado" @click="todoStore.alternarEstado(tarea.id)" />
          <span :class="{ completado: tarea.completado }">{{ tarea.texto }}</span>
          <button @click="todoStore.eliminarTarea(tarea.id)">❌</button>
        </li>
      </ul>
  
      <h2>Tareas completadas: {{ todoStore.tareasCompletadas.length }}</h2>
      <h2>Tareas pendientes: {{ todoStore.tareasPendientes.length }}</h2>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useTodoStore } from '@/stores/todoStore';
  
  export default {
    setup() {
      const todoStore = useTodoStore();
      const nuevaTarea = ref('');
  
      const agregarTarea = () => {
        if (nuevaTarea.value.trim()) {
          todoStore.agregarTarea(nuevaTarea.value);
          nuevaTarea.value = '';
        }
      };
  
      return { todoStore, nuevaTarea, agregarTarea };
    }
  };
  </script>
  
  <style>
  .completado {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  
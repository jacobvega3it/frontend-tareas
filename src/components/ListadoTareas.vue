<template>
    <div>
      <h1>Lista de Tareas</h1>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Nueva tarea" />
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <template v-if="editingTask === index">
            <input v-model="task.text" @blur="saveTask(index, task.text)" />
          </template>
          <template v-else>
            {{ task.text }}
            <button @click="editTask(index)">Editar</button>  
            <button @click="removeTask(index)">Eliminar</button>
          </template>
        </li>
      </ul>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const tasks = ref([]);
    const newTask = ref('');
    const editingTask = ref(null);

    const addTask = () => {
      if (newTask.value){
        tasks.value.push({ text: newTask.value, done: false });
        newTask.value = '';
      }
    };

    const editTask = (index) => {
      editingTask.value = index;
    };

    const saveTask = (index, text) => {
      tasks.value[index].text = text;
      editingTask.value = null;
    };

    const removeTask = (index) => {
      tasks.value.splice(index, 1);
    };

    return { tasks, newTask, addTask, removeTask, editingTask, editTask, saveTask };
  } 
};
</script>
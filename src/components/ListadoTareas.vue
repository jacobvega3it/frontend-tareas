<template>
    <div>
      <h1>Lista de Tareas</h1>
      <input v-model="newTask" @keyup.enter="addNewTask" placeholder="Nueva tarea" />
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
      <hr>
      <h2>Tareas completadas</h2>
      <ul>
        <li v-for="(task, index) in completedTasks" :key="index">
          {{ task.text }}
        </li>
      </ul>
      <p>
        Nombres de tareas: {{ taskNames }}
      </p>
      <p>
        Total de tareas: {{ totalTasks }}
      </p>
      <p>
        Tareas ordenadas alfabeticamente: {{ tasksOrdered }}
      </p>
      <p>
        Primera tarea completada: {{ firstCompleted }} con el índice {{ firstIndexCompleted }}
      </p>
      <p>
        ¿Hay tareas completadas?: {{ hasCompleted }}
      </p>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useTasks } from '../composables/useTasks';

export default {
  setup() {
    const { tasks, addTask, editingTask, saveTask, removeTask, editTask, completedTasks, taskNames, totalTasks, 
      tasksOrdered, firstCompleted, firstIndexCompleted, readTasks, hasCompleted } = useTasks();
    
    const newTask = ref('');

    const addNewTask = () => {
      if (newTask.value){
        addTask({ text: newTask.value, done: false });
        newTask.value = '';
      }
    };

    onMounted(() => {
      readTasks();
    });

    return { tasks, newTask, addNewTask, removeTask, editingTask, editTask, saveTask, completedTasks, taskNames, totalTasks, 
      tasksOrdered, firstCompleted, firstIndexCompleted, readTasks, hasCompleted };
  } 
};
</script>


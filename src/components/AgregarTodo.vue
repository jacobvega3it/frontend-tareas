<template>
    <div>
        <h1>Registrar To-Do</h1>
        <p>Formulario para la creación de una tarea.</p>
    </div>
    <div v-if="mensaje">
        <p>{{ mensaje }}</p>
    </div>
    <div v-if="isLoading">
        <p>Procesando...</p>
    </div>
    <div>
        <form @submit.prevent="submitTodo">
            <p>Nombre: <input v-model="todo" placeholder="Ingrese una tarea" required /></p>
            <p>Completada: <input v-model="completed" type="checkbox" /></p>
            <p><button type="submit">Agregar</button></p>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const todo = ref('');
        const completed = ref(false);
        const userId = ref(localStorage.getItem('userId'));
        const mensaje = ref('');

        const isLoading = ref(false);

        const submitTodo = async () => {
            isLoading.value = true;
            try {
                if (!todo.value) {
                    alert('Ingrese una tarea');
                    return;
                }
                const response = await axios.post('https://dummyjson.com/todos/add', {
                    todo: todo.value, completed: completed.value, userId: userId.value
                });
                todo.value = '';
                completed.value = false;
                mensaje.value = 'Tarea registrada exitosamente';
                console.log('Tarea registrada:', response.data);
            } catch (error) {
                mensaje.value = 'Error al registrar tarea';
                console.error('Error:',error);
            }
            finally {
                isLoading.value = false;
            }
        }

        return { todo, completed, mensaje, submitTodo, isLoading }
    }
}

</script>
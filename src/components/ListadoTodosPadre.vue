<template>
    <ListadoTodosIndependiente>
        <template #contenido="{ todos, paginaActual, totalPaginas, cambiarPagina, siguiente, anterior }">
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tarea</th>
                        <th>Completado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in todos" :key="todo.id">
                        <td>{{ todo.id }}</td>
                        <td>{{ todo.todo }}</td>
                        <td>{{ todo.completed ? "Sí" : "No" }}</td>
                    </tr>
                </tbody>
            </table>

            <div class="pagination">
                <button @click="anterior" :disabled="paginaActual === 1">Anterior</button>
                <button v-for="page in totalPaginas" :key="page" :class="{ active: page === paginaActual }"
                    @click="cambiarPagina(page)">
                    {{ page }}
                </button>
                <button @click="siguiente" :disabled="paginaActual === totalPaginas">Siguiente</button>
            </div>
        </template>
    </ListadoTodosIndependiente>
</template>

<script setup>
import ListadoTodosIndependiente from "./ListadoTodosIndependiente.vue";
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f4f4f4;
}

.pagination {
    margin-top: 16px;
    display: flex;
    gap: 8px;
    justify-content: center;
}

button {
    padding: 8px 12px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    cursor: pointer;
    border-radius: 4px;
}

button.active {
    background-color: #007bff;
    color: white;
    font-weight: bold;
}

button:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
}
</style>

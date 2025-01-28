<script setup>
import { ref, computed, onMounted } from "vue";
import useApiTodos from "@/composables/useApiTodos";

const { obtenerTodos } = useApiTodos();

const todos = ref([]); 
const currentPage = ref(1); 
const itemsPerPage = 10; 

onMounted(async () => {
    const data = await obtenerTodos();
    if (data) {
        todos.value = data.todos; 
    }
});

const paginatedTodos = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return todos.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(todos.value.length / itemsPerPage));

const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};
</script>

<template>
    <div>
        <h1>Listado de Tareas</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tarea</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in paginatedTodos" :key="todo.id">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.todo }}</td>
                    <td>{{ todo.completed ? "Completado" : "Pendiente" }}</td>
                </tr>
            </tbody>
        </table>

        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
            <button v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }"
                @click="goToPage(page)">
                {{ page }}
            </button>
            <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
        </div>
    </div>
</template>

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

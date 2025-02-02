<script setup>
import { ref, computed, onMounted } from "vue";
import useApiTodos from "@/composables/useApiTodos";

const { obtenerTodos } = useApiTodos();
const todos = ref([]);
const currentPage = ref(1);
const itemsPerPage = 7;

onMounted(async () => {
    const data = await obtenerTodos();
    if (data) {
        todos.value = data.todos;
    }
});

const paginatedTodos = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return todos.value.slice(start, start + itemsPerPage);
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
        <slot 
            name="contenido" 
            :todos="paginatedTodos" 
            :paginaActual="currentPage" 
            :totalPaginas="totalPages"
            :cambiarPagina="goToPage"
            :siguiente="nextPage"
            :anterior="prevPage">
        </slot>
    </div>
</template>

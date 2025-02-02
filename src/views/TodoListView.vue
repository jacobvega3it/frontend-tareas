<template>
    <div>
        <!-- <ListadoTodos /> -->
        <ListadoTodosPadre />
    </div>
</template>

<script>

//import ListadoTodos from '@/components/ListadoTodos.vue';
import ListadoTodosPadre from '@/components/ListadoTodosPadre.vue';

export default {
    name: 'TodoListView',
    components: {
        //ListadoTodos,
        ListadoTodosPadre
    }
}
</script>
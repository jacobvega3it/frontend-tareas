<template>
    <div>
        <ListadoTodos />
    </div>
</template>

<script>

import ListadoTodos from '@/components/ListadoTodos.vue';

export default {
    name: 'TodoListView',
    components: {
        ListadoTodos
    }
}
</script>
<template>
    <p><input v-model="name" placeholder="Ingrese un nombre" /></p>
    <p>Hola {{ name }}</p>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const name = ref('');

        return {
            name
        };
    },
};
</script>


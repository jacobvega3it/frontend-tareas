<template>
    <div>
        <h1>Contador Reactivo</h1>
        <p>El valor del contador es: {{ contador }}</p>
        <button @click="incrementar">Incrementar</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const contador = ref(0);

        const incrementar = () => {
            contador.value++;
        };

        return {contador, incrementar};
    }
};
</script>


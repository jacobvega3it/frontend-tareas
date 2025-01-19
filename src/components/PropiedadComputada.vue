<template>
    <div>
        <h1>Propiedad Computada</h1>
        <p>Ingrese un número: <input v-model="numero" /></p>
        <p>El número ingresado es: {{ numero }}</p>
        <p>El número incrementado en 10 es: {{ numeroIncrementado }}</p>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    
    setup() {
        const numero = ref(0);

        const numeroIncrementado = computed(() => {
            return parseInt(numero.value) + 10;
        });

        return { numero, numeroIncrementado };
    }
};
</script>
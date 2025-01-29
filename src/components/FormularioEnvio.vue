<template>
    <form @submit.prevent="handleSubmit">
        <p><input v-model="email" placeholder="Ingrese un email" /></p>
        <p><button type="submit">Enviar</button></p>
    </form>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const email = ref('');

        const handleSubmit = () => {
            alert(`Email: ${email.value}`);
            console.log(`Email: ${email.value}`);
        };

        return {
            email,
            handleSubmit
        };
    },
};
</script>


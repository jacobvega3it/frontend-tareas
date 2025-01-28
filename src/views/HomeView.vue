<template>
    <div>
        <h1>Home</h1>
        <p>Esta es la página de inicio</p>
    </div>
</template>

<script>

import { ref, onMounted } from 'vue';

export default {
    name: 'HomeView',
    setup() {

        const data = ref('');

        const loadFromLocalStorage = () => {
            data.value = localStorage.getItem('token') || '';
            console.log('Token cargado:', data.value);
        }

        onMounted(() => {
            loadFromLocalStorage();
        });

        return {
            data
        }
    }
}

</script>


<template>
    <div>
        <h1>Registrar usuario</h1>
        <p>Formulario para la creación de un usuario.</p>
    </div>
    <div v-if="mensaje">
        <p>{{ mensaje }}</p>
    </div>
    <div>
        <form @submit.prevent="agregarUsuario">
            <p>Nombre: <input v-model="nombre" placeholder="Ingrese un nombre" required /></p>
            <p>Apellido: <input v-model="apellido" placeholder="Ingrese un apellido" required /></p>
            <p>Edad: <input v-model="edad" type="number" required /></p>
            <p><button type="submit">Agregar</button></p>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const nombre = ref('');
        const apellido = ref('');
        const edad = ref(0);
        const mensaje = ref('');

        const agregarUsuario = async () => {
            try {
                const response = await axios.post('https://dummyjson.com/users/add', {
                    firstName: nombre.value, lastName: apellido.value, age: edad.value
                });
                nombre.value = '';
                apellido.value = '';
                edad.value = 0;
                mensaje.value = 'Usuario registrado exitosamente';
                console.log('Usuario registrado:', response.data);
            } catch (error) {
                mensaje.value = 'Error al registrar usuario';
                console.error('Error:',error);
            }
        }

        return {
            nombre, apellido, edad, mensaje, agregarUsuario
        }
    }
}
</script>
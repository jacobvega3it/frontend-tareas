<template>
    <div>
        <h1>Ingreso usuario</h1>
    </div>
    <div>
        <form @submit.prevent="login">
            <p><input v-model="username" placeholder="Usuario" required /></p>
            <p><input v-model="password" type="password" placeholder="Contraseña" required /></p>
            <p><button type="submit">Iniciar sesión</button></p>
        </form>
    </div>
    <p>Puede obtener una lista de usuarios posibles desde la siguiente ruta:</p>
    <p><a href="https://dummyjson.com/users" target="_blank">Usuarios</a></p>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const username = ref('');
        const password = ref('');
        const router = useRouter();

        const login = async () => {
            try {
                const response = await axios.post('https://dummyjson.com/auth/login', {
                    username: username.value,
                    password: password.value
                });
                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('userId', response.data.id);

                console.log('Inicio de sesión exitoso:', response.data);
                router.push(`/home`);
            } catch (error) {
                console.error('Error de autenticación', error);
            }
        }

        return {
            username,
            password,
            login
        }
    }
}
</script>
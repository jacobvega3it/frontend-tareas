<template>
    <form @submit.prevent="handleSubmit">

        <input v-model="username" placeholder="Usuario" />
        <input v-model="password" type="password" placeholder="Contraseña" />
        
        <select v-model="option">
            <option value="A">Opción A</option>
            <option value="B">Opción B</option>
            <option value="C">Opción C</option>
        </select>
        
        <input v-model="check" type="checkbox" />

        <input v-model="dia" type="radio" value="Lunes" />
        <input v-model="dia" type="radio" value="Martes" />
        <input v-model="dia" type="radio" value="Miércoles" />

        <input v-model="date" type="date" />
        <input v-model="range" type="range" min="1" max="100" />
        <input v-model="color" type="color" />

        <input v-model="email" type="email" placeholder="Correo" required />
        <input v-model="telefono" type="text" placeholder="Teléfono" minlength="6" required />

        <button type="submit">Enviar</button>
    </form>
    <div v-if="message">
        <p>{{ message }}</p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const message = ref('');

        const password = ref('');
        const username = ref('');

        const option = ref('');
        const check = ref('');
        const dia = ref('');

        const date = ref('');
        const range = ref('');
        const color = ref('');

        const email = ref('');
        const telefono = ref('');

        const handleSubmit = () => {
            alert(`Usuario: ${username.value}, Contraseña: ${password.value}`);
            message.value = `Usuario: ${username.value}, Contraseña: ${password.value}`;
            message.value += `, Opción: ${option.value}`;
            message.value += `, Fecha: ${date.value}`;
            message.value += `, Rango: ${range.value}`;
            message.value += `, Check: ${check.value}`;
            message.value += `, Color: ${color.value}`;
            message.value += `, Email: ${email.value}`;
            message.value += `, Teléfono: ${telefono.value}`;
            message.value += `, Día: ${dia.value}`;
        };

        return {
            username,
            password,
            message,
            option,
            date,
            check,
            range,
            email,
            telefono,
            color,
            dia,
            handleSubmit
        };
    },
};
</script>
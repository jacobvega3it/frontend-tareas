<template>
    <div>
        <h1>Registrar usuario</h1>
        <p>Formulario para la creación de un usuario.</p>
    </div>
    <div v-if="mensaje">
        <p>{{ mensaje }}</p>
    </div>
    <div>
        <Form :validation-schema="schema" @submit="agregarUsuario">
            <p>Nombre: <Field name="nombre" placeholder="Ingrese un nombre" /></p>
            <ErrorMessage name="nombre" />
            
            <p>Apellido: <Field name="apellido" placeholder="Ingrese un apellido" /></p>
            <ErrorMessage name="apellido" />
            
            <p>Edad: <Field name="edad" type="number" placeholder="Ingrese su edad" /></p>
            <ErrorMessage name="edad" />
            
            <p><button type="submit">Agregar</button></p>
        </Form>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import * as yup from 'yup';

export default {
    setup() {
        const mensaje = ref('');

        const schema = yup.object({
            nombre: yup.string().required('El nombre es obligatorio'),
            apellido: yup.string().required('El apellido es obligatorio'),
            edad: yup.number().required('La edad es obligatoria')
                .min(1, 'La edad debe ser mayor a 0')
                .max(150, 'La edad debe ser menor a 150'),
        });

        const agregarUsuario = async (values, { resetForm }) => {
            try {
                console.log('Valores recibidos:', values);
                const response = await axios.post('https://dummyjson.com/users/add', {
                    firstName: values.nombre, lastName: values.apellido, age: values.edad,
                });
                mensaje.value = 'Usuario registrado exitosamente';
                console.log('Usuario registrado:', response.data);
                
                resetForm();
            } catch (error) {
                mensaje.value = 'Error al registrar usuario';
                console.error('Error:', error);
            }
        };

        return { agregarUsuario, mensaje, schema };
    }
};
</script>

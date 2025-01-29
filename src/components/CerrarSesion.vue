<template>
    <div>
        <h1>Cerrando Sesión</h1>
    </div>
</template>

<script>
export default {
    name: 'CerrarSesion',
    mounted() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        console.log('Cierre de sesión exitoso');
        this.$router.push('/login');
    }
}
</script>


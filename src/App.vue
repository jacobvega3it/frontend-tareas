<template>
  <div>
    <nav>
      <router-link to="/login">Acceso</router-link> |
      <router-link to="/register">Registrar</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/tasks">Tareas</router-link> |
      <router-link to="/about">Acerca De</router-link> |
      <router-link to="/close">Cerrar Sesión</router-link>
    </nav>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>


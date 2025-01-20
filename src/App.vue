<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks">Tareas</router-link> |
      <router-link to="/about">Acerca De</router-link>
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


<template>
  <div>
    <ListadoTareas />
    <ContadorReactivo />
  </div>
</template>

<script>
import ContadorReactivo from './components/ContadorReactivo.vue';
import ListadoTareas from './components/ListadoTareas.vue';

export default {
  components: {
    ContadorReactivo, 
    ListadoTareas
  }
};
</script>
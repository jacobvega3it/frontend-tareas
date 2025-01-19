<template>
  <div>
    <ListadoTareas />
    <ContadorReactivo />
    <PropiedadComputada />
  </div>
</template>

<script>
import ContadorReactivo from './components/ContadorReactivo.vue';
import ListadoTareas from './components/ListadoTareas.vue';
import PropiedadComputada from './components/PropiedadComputada.vue';

export default {
  components: {
    ContadorReactivo, 
    ListadoTareas,
    PropiedadComputada
  }
};
</script>
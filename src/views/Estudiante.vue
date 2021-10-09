<template>
  <div>
    <formulario-estudiante />
    <listado-estudiantes />
  </div>
</template>

<script>
//Importar los componentes
import FormularioEstudiante from "../components/FormularioEstudiante.vue";
import ListadoEstudiantes from "../components/ListadoEstudiantes.vue";

export default {
  components: {
    FormularioEstudiante,
    ListadoEstudiantes,
  },
};
</script>

<style>
</style>
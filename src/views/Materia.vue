<template>
  <div>
    <formulario-materia />
    <listado-materias />
  </div>
</template>

<script>
//Importar los componentes
import FormularioMateria from "../components/FormularioMateria.vue";
import ListadoMaterias from "../components/ListadoMaterias.vue";

export default {
  components: {
    FormularioMateria,
    ListadoMaterias,
  },
};
</script>

<style>
</style>
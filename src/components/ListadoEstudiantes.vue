<template>
  <!-------Tabla----->
  <v-simple-table>
    <template v-slot:default>
      <!---Cabecera de la tabla--->
      <thead>
        <tr>
          <th class="text-center">Nombre</th>
          <th class="text-center">Apellido</th>
          <th class="text-center">Teléfono</th>
          <th class="text-center">Género</th>
          <th class="text-center">Email</th>
          <th class="text-center">Edad</th>
          <th class="text-center">Cédula</th>
          <th class="text-center">Código</th>
          <th class="text-center">Acciones</th>
        </tr>
      </thead>
      <!---Cuerpo de la tabla--->
      <tbody>
        <tr v-for="item in estudiantes" :key="item._id">
          <td>{{ item.nombre }}</td>
          <td>{{ item.apellido }}</td>
          <td>--</td>
          <td>{{ item.genero }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.edad }}</td>
          <td>{{ item.cedula }}</td>
          <td>{{ item.codigo }}</td>
          <!---Columna de acciones--->
          <td>
            <v-btn
              class="ma-2"
              outlined
              x-small
              color="indigo"
              v-on:click="actualizar"
              ><!--@click-->
              Actualizar
            </v-btn>
            <v-btn
              class="ma-2"
              outlined
              x-small
              color="error"
              v-on:click="eliminar(item._id)"
            >
              Eliminar
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import store from "../store/index.js";

export default {
  methods: {
    actualizar() {
      console.log("Actualizar");
    },
    eliminar(id) {
      let obj = { id };
      store
        .dispatch("eliminarEstudiante", obj)
        .then(() => {
          store.dispatch("cargarEstudiantes");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: () => {
    store.dispatch("cargarEstudiantes");
  },
  computed: {
    estudiantes: () => {
      return store.state.estudiantes;
    },
  },
};
</script>

<style>
</style>
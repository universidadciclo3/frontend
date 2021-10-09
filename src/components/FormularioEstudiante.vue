<template>
  <div id="contenedor">
    <span id="titulo">Matricular Estudiante</span>
    <!----Salto de línea--->
    <br />
    <!--------FORMULARIO------>

    <v-form ref="form" v-model="valid" lazy-validation>
      <!-------Fila 1------>
      <v-row>
        <!----Columna 1----->
        <v-col cols="6" sm="6" md="6">
          <!----Nombre--->
          <v-text-field
            v-model="nombre"
            :counter="50"
            :rules="rules"
            label="Nombre"
            required
            outlined
          ></v-text-field>
        </v-col>
        <!----Columna 2----->
        <v-col cols="6" sm="6" md="6">
          <!---Teléfono--->
          <v-text-field
            v-model="telefono"
            :counter="12"
            :rules="telRules"
            label="Teléfono"
            required
            outlined
            type="tel"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-------Fila 2------>
      <v-row>
        <!----Columna 1----->
        <v-col cols="6" sm="6" md="6">
          <!------Apellido---->
          <v-text-field
            v-model="apellido"
            :counter="50"
            :rules="rules"
            label="Apellido"
            required
            outlined
          ></v-text-field>
        </v-col>
        <!----Columna 2----->
        <v-col cols="6" sm="6" md="6">
          <!------Género----->
          <v-select
            v-model="select_genero"
            :items="genero"
            :rules="[(v) => !!v || 'El género es requerido']"
            label="Género"
            required
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <!-------Fila 3------>
      <v-row>
        <!----Columna 1----->
        <v-col cols="6" sm="6" md="6">
          <!-------Email----->
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
          ></v-text-field>
        </v-col>
        <!----Columna 2----->
        <v-col cols="6" sm="6" md="6">
          <!-------Edad------>
          <v-text-field
            v-model="edad"
            :counter="2"
            :rules="edadRules"
            label="Edad"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <!-------Fila 4------>
      <v-row>
        <!----Columna 1----->
        <v-col cols="6" sm="6" md="6">
          <!------Cédula----->
          <v-text-field
            v-model="cedula"
            :counter="10"
            :rules="cedulaRules"
            label="Cédula"
            required
            outlined
          ></v-text-field>
        </v-col>
        <!----Columna 2----->
        <v-col cols="6" sm="6" md="6">
          <!------Código---->
          <v-text-field
            v-model="codigo"
            :counter="5"
            :rules="codigoRules"
            label="Código"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="registrar">
        Registrar
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  data: () => {
    return {
      valid: true,
      //variables para data binding
      nombre: "",
      apellido: "",
      telefono: "",
      select_genero: null,
      email: "",
      edad: "",
      cedula: "",
      codigo: "",
      //Reglas para validar los campos
      rules: [
        (v) => !!v || "Este campo es requerido",
        (v) => (v && v.length <= 50) || "Máximo 50 caracteres",
      ],
      emailRules: [
        (v) => !!v || "E-mail es requerido",
        (v) => /.+@.+\..+/.test(v) || "Ingrese un E-mail válido",
      ],
      telRules: [
        (v) => !!v || "Este campo es requerido",
        (v) => (v && v.length <= 12) || "Máximo 12 caracteres",
      ],
      edadRules: [
        (v) => !!v || "Este campo es requerido",
        (v) => (v && v.length <= 2) || "Máximo 2 caracteres",
      ],
      codigoRules: [
        (v) => !!v || "Este campo es requerido",
        (v) => (v && v.length <= 5) || "Máximo 5 caracteres",
      ],
      cedulaRules: [
        (v) => !!v || "Este campo es requerido",
        (v) => (v && v.length <= 10) || "Máximo 10 caracteres",
      ],
      genero: ["M", "F"],
    };
  },
  methods: {
    registrar() {
      if (this.$refs.form.validate()) {
        //Crear objeto javascript
        let objEstudiante = {
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          cedula: this.cedula,
          genero: this.select_genero,
          edad: this.edad,
          codigo: this.codigo,
        };
        //Llama las acciones del store
        store.dispatch("registrarEstudiante", objEstudiante);
        this.$refs.form.reset() 
        //this.limpiarFormulario();
      } else {
        console.log("Faltan datos por insertar");
      }
    },
    //Método para validar solo letras
    soloLetras(e) {
      console.log("keypress->", e);
      var key = e.keyCode || e.which,
        tecla = this.nombre.toLowerCase(),
        letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
        especiales = [8, 37, 39, 46],
        tecla_especial = false;

      for (var i in especiales) {
        if (key == especiales[i]) {
          tecla_especial = true;
          break;
        }
      }

      if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
      }
    },
  },
};
</script>

<style>
#contenedor {
  text-align: center;
}
#titulo {
  font-size: 2.5rem;
  font-weight: bold;
}
</style>



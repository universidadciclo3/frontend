import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    estudiantes: []
  },
  mutations: {
    setEstudiantes(state, payload) {
      state.estudiantes = payload;
    },
    pushEstudiante(state, payload) {
      state.estudiantes.push(payload);
    }
  },
  actions: {
    async cargarEstudiantes({ commit }) {
      const peticion = await fetch('http://localhost:3000/estudiante');
      const data = await peticion.json();
      commit('setEstudiantes', data);
      console.log(data);
    },
    async registrarEstudiante({ commit }, objEstudiante) {
      const peticion = await fetch('http://localhost:3000/estudiante', {
        method: 'POST',//'PUT', 'DELETE'
        headers: {
          'Content-Type': 'application/json'
        },
        //Convierte un objeto javascript a JSON y lo asigna al cuerpo de la petición
        body: JSON.stringify(objEstudiante)
      });
      const data = await peticion.json();
      console.log(peticion);
      console.log(data);
      commit('pushEstudiante', data);
    },
    async eliminarEstudiante({commit}, obj){
      const peticion = await fetch('http://localhost:3000/estudiante', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
    }
  },
  modules: {
  }
})

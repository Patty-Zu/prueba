import { createStore } from 'vuex'

export default createStore({
  state: {
    postulantes:[],
    postulante: {
      nombre: '',
      celular: '',
      email: '',
      programa: '',
      politica: [],
    },

    usuarios:[],
    usuario:{
      email: '',
      password: '',
    },

    nuevos:[],
    nuevo:{
      nombre:'',
      email: '',
      password: '',
      terminos: [],
    },
  },
  mutations: {
    setPostulanteAction(state, payload ){
      state.postulantes.push(payload);
    },
  },
  actions: {
    setPostulanteAction({commit}, postulante){
      commit('setPostulanteAction', postulante)
      
    },

    setUsuarioAction(usuario){
      console.log(usuario);
    },
    setNuevoAction(nuevo){
      console.log(nuevo);
    },
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line
import router from './router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    producto: null
  },
  mutations: {
    setProducto(state, producto){
      state.producto = producto;
    }
  },
  actions: {
    guardarProducto({commit}, producto){
      commit("setProducto", producto);
      localStorage.setItem("producto", JSON.stringify( producto ));
    },
    eliminarProducto({commit}){
      commit("setProducto", null);
      localStorage.removeItem("producto");
    },
    
    sameProducto({commit}){
      let producto = localStorage.getItem("producto")
      if(producto){
        commit("setProducto", JSON.parse(producto))
        router.push({name: 'cuestionario'})
      }
    }
  }
})

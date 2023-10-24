import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listaArtistas: [{
        id: 0,
        nombre: '',
        detalles: '',
    }],
    contadorArtistas: 1,

    listaDiscos:[{
        id: 0,
        titulo: '',
        artista: null,
        detalles: '',
    }],
    contadorDiscos: 1,

    waterfallRemoveDiscos: true, // eliminar discos cuando se elimine su artista

    listaDndClases:[],
  },
  getters: {},
  mutations: {
    addEmptyArtista(state){
        state.listaArtistas.push({
            id: state.contadorArtistas,
            nombre: '',
        });
        state.contadorArtistas++;
    },
    removeArtista(state, aid){
        let idx = state.listaArtistas.findIndex(a => (a.id == aid));
        if(idx < 0) return;
        state.listaArtistas.splice(idx, 1);

        if(state.waterfallRemoveDiscos){
            let i = state.listaDiscos.length - 1;
            while (i >= 0) {
                if (state.listaDiscos[i].artista != null && state.listaDiscos[i].artista.id == aid) {
                    state.listaDiscos.splice(i, 1);
                }
                i--;
            }
        }

        // state.listaDiscos = state.listaDiscos.filter(d => (d.artista == null || d.artista.id != aid))
    },
    

    addEmptyDisco(state){
        state.listaDiscos.push({
            id: state.contadorDiscos,
            titulo: '',
            artista: null,
            detalles: '',
        });
        state.contadorDiscos++;
    },
    removeDisco(state, aid){
        let idx = state.listaDiscos.findIndex(a => (a.id == aid));
        if(idx < 0) return;
        state.listaDiscos.splice(idx, 1);
    },

    addDndClase(state, clase){
        state.listaDndClases.push(clase);
    }

  },
  actions: {},
  modules: {},
});

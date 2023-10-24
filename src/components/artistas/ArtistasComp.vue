<template>
  <v-container>

    <v-btn style="background-color: #e0e0e0">
      <v-icon>mdi-account</v-icon>
      Artistas
    </v-btn>
    <v-btn @click="$router.push({name: 'ejercicio1_discos'})">
      <v-icon>mdi-disc</v-icon>
      <span class="mr-2">Discos</span>
    </v-btn>

    <br>

    <v-row class="text-left">
      <v-col cols="6" v-for="artista in $store.state.listaArtistas" :key="artista.id">
        <v-card>

          <div v-show="!editable(artista.id)">
            <v-card-title>{{artista.nombre}}</v-card-title>
            <v-card-text>{{artista.detalles}}</v-card-text>
          </div>

          <div v-show="editable(artista.id)">
            <v-text-field label="Nombre" v-model="artista.nombre"></v-text-field>
            <v-textarea label="Detalles del artista" v-model="artista.detalles"></v-textarea>
          </div>

          <v-card-actions>
            <!--Edicion-->
            <v-btn v-show="editando != artista.id" @click="editar(artista.id)">
              Editar
            </v-btn>
            <v-btn v-show="editando == artista.id" @click="editarDone">
              Hecho
            </v-btn>

            <!--Eliminar-->
            <v-btn @click="eliminar(artista.id)">
              Eliminar
            </v-btn>

          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>

    <br>
    <v-btn @click="crear()">+</v-btn>

  </v-container>
</template>

<script>
export default {
  name: "artistas-comp",

  methods:{
    editar(aid){
      this.editando = aid;
    },
    editarDone(){
      this.editando = null;
    },
    eliminar(aid){
      this.$store.commit('removeArtista', aid);
    },
    crear(){
      this.$store.commit('addEmptyArtista');
      let lista = this.$store.state.listaArtistas;
      this.editando = lista.at(lista.length - 1).id;
    },
    editable(aid){
      return this.editando == aid;
    }
  },

  data: () => ({
    editando: null,
  }),
};
</script>

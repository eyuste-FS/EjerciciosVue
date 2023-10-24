<template>
  <v-container>

    <v-btn @click="$router.push({name: 'ejercicio1'})">
      <!--<v-icon>mdi-arrow-left-bold</v-icon>-->
      <v-icon>mdi-account</v-icon>
      <span class="mr-2">Artistas</span>
    </v-btn>
    <v-btn style="background-color: #e0e0e0">
      <v-icon>mdi-disc</v-icon>
      Discos
    </v-btn>

    <br>

    <v-row class="text-left">
      <v-col cols="6" v-for="disco in $store.state.listaDiscos" :key="disco.id">
        <v-card>

          <div v-show="!editable(disco.id)">
            <v-card-title>{{disco.titulo}}</v-card-title>
            <v-card-text>{{(disco.artista != null) ? disco.artista.nombre : ''}}</v-card-text>
            <v-card-text>{{disco.detalles}}</v-card-text>
          </div>

          <div v-show="editable(disco.id)">
            <v-text-field label="Titulo" v-model="disco.titulo"></v-text-field>
            <v-select
              v-model="disco.artista"
              :items="$store.state.listaArtistas"
              item-text="nombre"
              label="Artista"
              persistent-hint
              return-object
              single-line
              >
            </v-select>
            <v-textarea label="Detalles del disco" v-model="disco.detalles"></v-textarea>
          </div>

          <v-card-actions>
            <!--Edicion-->
            <v-btn v-show="editando != disco.id" @click="editar(disco.id)">
              Editar
            </v-btn>
            <v-btn v-show="editando == disco.id" @click="editarDone">
              Hecho
            </v-btn>

            <!--Eliminar-->
            <v-btn @click="eliminar(disco.id)">
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
  name: "discos-comp",

  methods:{
    editar(did){
      this.editando = did;
    },
    editarDone(){
      this.editando = null;
    },
    eliminar(did){
      this.$store.commit('removeDisco', did);
    },
    crear(){
      this.$store.commit('addEmptyDisco');
      let lista = this.$store.state.listaDiscos;
      this.editando = lista.at(lista.length - 1).id;
    },
    editable(did){
      return this.editando == did;
    },
  },

  data: () => ({
    editando: null,
  }),
};
</script>

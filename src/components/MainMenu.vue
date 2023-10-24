<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4" v-for="(page, pidx) in pages" :key="pidx">
        <v-card @click="$router.push({name: page.name})">
          <v-card-title>{{page.title}}</v-card-title>
          <v-card-text>{{page.desc}}</v-card-text>
          <router-link :to="{name: page.name}"></router-link>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "main-menu",

  data: () => ({
    pages: [
      {
        title: "Artistas y discos",
        desc: "Página para añadir, editar o eliminar artistas y discos.",
        name:"ejercicio1",
      },
      {
        title: "Clases de Dnd 5e",
        desc: "Página para visualizar las clases de Dnd 5º Edición",
        name:"ejercicio2",
      },
    ],
  }),
};
</script>

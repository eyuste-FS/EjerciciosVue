<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>Vue - Erik Yuste</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn v-show="$route.name != 'home'" @click="$router.push({name: 'home'})">
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

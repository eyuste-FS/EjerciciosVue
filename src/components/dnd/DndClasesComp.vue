<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="6" v-for="(clase, cidx) in $store.state.listaDndClases" :key="cidx">
        <v-card>
          <v-card-title style="display: flex; justify-content: space-between;">
            
            <div>
              <v-img width="35" :src="clase.imagen"></v-img>
              <span>{{ clase.name }}</span>
            </div>

            <v-icon title="Hitdie" size="35">
              {{ getHitDieIcon(clase.hitdie) }}
            </v-icon>
          </v-card-title>

          <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
            {{'Elegir ' + clase.nproficiencies + ' proficiencias de habilidad'}}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            <div>
              <ul>
                <li v-for="prof in clase.proficiencies" :key="cidx + '_' + prof">
                  {{prof}}
                </li>
              </ul>
            </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          
          <v-expansion-panel>
            <v-expansion-panel-header>
            Otras proficiencias
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            <div>
              <ul>
                <li v-for="prof in clase.other_proficiencies" :key="cidx + '_' + prof">
                  {{prof}}
                </li>
              </ul>
            </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
          <!--
          <v-card-text>
          </v-card-text>
          -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import axios from "axios";
export default {
  name: "dnd-clases-comp",

  data: () => ({}),

  methods: {

    getHitDieIcon(n){
      return 'mdi-dice-d' + n + '-outline';
    },

    createClassFromData(data) {
      let profs = data.proficiency_choices[0].from.options.map(
        (element) => {
          let name = element.item.name;
          name = name.slice(name.indexOf(" ") + 1);
          //console.log(name);
          "".slice();
          return name;
        }
      );
      let other_profs = data.proficiencies.map(p=>p.name);
      //console.log(other_profs);
      let clase = {
        index: data.index,
        imagen: this.classImage(data.index),
        name: data.name,
        hitdie: data.hit_die,
        nproficiencies: data.proficiency_choices[0].choose,
        proficiencies: profs,
        other_proficiencies: other_profs,
      };
      return clase;
    },

    loadClase(cindex){
      let clase = null;

      fetch(this.apiClassUrl + cindex)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          return data;
        })
        .then((data) => {
          clase = this.createClassFromData(data);
          this.$store.commit("addDndClase", clase);
        })
        .catch();
    },
  },

  created() {
    if (this.$store.state.listaDndClases.length > 0) return;

    fetch(this.apiClassUrl)
      .then((response) => response.json())
      .then(({ results }) => {
        //console.log("Resultados: ");console.log(results);
        //let indexes = results.map((r) => r.index);
        results.forEach(r => this.loadClase(r.index));
      })
      .catch();

  },
};
</script>

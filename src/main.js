import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

//App.use(Axios);

Vue.mixin({
    data() {return{
        baseUrl: 'https://www.dnd5eapi.co/',
        apiBaseUrl: 'https://www.dnd5eapi.co/api/',
        apiClassUrl: 'https://www.dnd5eapi.co/api/classes/',
    };},
    methods: {
        classImage(classid){

            const imagelocation = {
                'cleric': 'https://www.dndbeyond.com/avatars/10/2/636336417054144618.jpeg',
                'rogue': 'https://www.dndbeyond.com/avatars/10/8/636336417681318097.jpeg',
                'wizard': 'https://www.dndbeyond.com/avatars/10/11/636336418370446635.jpeg',
                'barbarian': 'https://www.dndbeyond.com/avatars/10/0/636336416778392507.jpeg',
                'paladin': 'https://www.dndbeyond.com/avatars/10/6/636336417477714942.jpeg',
                'fighter': 'https://www.dndbeyond.com/avatars/10/4/636336417268495752.jpeg',
                'bard': 'https://www.dndbeyond.com/avatars/10/1/636336416923635770.jpeg',
                'druid': 'https://www.dndbeyond.com/avatars/10/3/636336417152216156.jpeg',
                'monk': 'https://www.dndbeyond.com/avatars/10/5/636336417372349522.jpeg',
                'ranger': 'https://www.dndbeyond.com/avatars/10/7/636336417569697438.jpeg',
                'sorcerer': 'https://www.dndbeyond.com/avatars/10/9/636336417773983369.jpeg',
                'warlock': 'https://www.dndbeyond.com/avatars/10/12/636336422983071263.jpeg',
                'artificer': 'https://www.dndbeyond.com/avatars/13916/408/637411847943829485.jpeg',
                'bloodhunter': 'https://www.dndbeyond.com/avatars/8551/969/637158853102614868.png',
            };
            let location = imagelocation[classid];

            if(!location) return 'https://img.freepik.com/vector-premium/construccion-signo-etiqueta_24886-506.jpg';

            return location;
        },
    },
});


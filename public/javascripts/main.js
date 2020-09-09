const Vue = require("vue/dist/vue.js");
const ElementUI = require('element-ui');

Vue.use(ElementUI);
Vue.component("home", require("./../../components/Home.vue"));

const app = new Vue({
    el: "#app"
  });
import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueSweetalert2 from "vue-sweetalert2";
import "./assets/css/grid24.min.css";

Vue.use(VueSweetalert2);
Vue.use(Buefy);

// Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import store from './store';
import BootstrapVue from "bootstrap-vue";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Firebase from "firebase"
import FirebaseConfig from "../config/Firebase";

Vue.use(BootstrapVue);
Vue.use(Element);
Vue.use(store);


console.log(router)
Firebase.initializeApp(FirebaseConfig);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Firebase,
  components: { App },
  template: '<App/>'
})

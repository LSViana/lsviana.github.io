import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/App.scss'
import './iconInitializer'

// Importing all components inside './components' folder
const req = require.context('./components/', true, /\.(js|vue)$/i);
req.keys().map(key => {
  const name = key.match(/\w+/)[0];
  return Vue.component(name, req(key).default)
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/App.scss'
import './styles/AppDark.scss'
import './iconInitializer'

// Importing all components inside './components' folder
const req = require.context('./components/', true, /\.(js|vue)$/i)
req.keys().map(key => {
    const fileNameKey = key.substr(key.lastIndexOf('/') + 1)
    const name = fileNameKey.match(/\w+/)[0]
    return Vue.component(name, req(key).default)
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
    methods: {
        /**
         * @param {Boolean} value
         */
        updateDark(value) {
            this.dark = value
        }
    },
    data: () => ({
        dark: true
    })
}).$mount('#app')

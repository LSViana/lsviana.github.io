import Vue from 'vue'

// Importing all components inside './components' folder
const req = require.context('./components/', true, /\.(js|vue)$/i)
req.keys().map(key => {
    const fileNameKey = key.substr(key.lastIndexOf('/') + 1)
    const name = fileNameKey.match(/\w+/)[0]
    return Vue.component(name, req(key).default)
})
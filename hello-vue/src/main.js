import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI'

let app = createApp(App)

app.config.globalProperties.$hello_api = HelloAPI

// this creates a new app, without hello_api which it 
// uses for the #app div on the page
// createApp(App).mount('#app')

// Instead, this is using the app created on line 5
app.mount('#app')
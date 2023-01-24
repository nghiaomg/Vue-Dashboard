import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

import './assets/main.css'
const app = createApp(App)

app.use(router)

const store = new Vuex.Store({
    state: {
        isLoggedIn: false
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn
    }
})

if(localStorage.getItem('e1aa9dc695')){
    store.state.isLoggedIn = true;
}

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login') 
    } else {
        next() 
    }
})

app.mount('#app')

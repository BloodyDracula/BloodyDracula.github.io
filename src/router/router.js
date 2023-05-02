import Main from "@/pages/Main.vue"
import {createRouter} from "vue-router/dist/vue-router";

const routes = [
    {
        path: '/',
        component: Main
    }
]

const  router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
const router = new VueRouter({
    base:"rutas",
    routes:[
        {
            path:'/lists',
            component:Lists
        }
    ]
})

let app = new Vue({
    router,
    el : "#app",
})
const router = new VueRouter({
    base:"rutas",
    routes:[
        {
            path:'/lists',
            component:Lists
        },
        {
            path:'/listsPrograming',
            component:listPrograming
        }
    ]
})

let app = new Vue({
    router,
    el : "#app",
})
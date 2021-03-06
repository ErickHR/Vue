const router = new VueRouter({
    base:"rutas",
    routes:[
        {
            path:'/lists',
            component:Lists
        },
        {
            path:'/listsPrograming',
            redirect:'/listsPrograming-new'
        },
        {
            path:'/listsPrograming-new',
            redirect:'/listsPrograming-new-Other'
        },
        {
            path:'/listsPrograming-new-Other',
            component:listPrograming
        }
    ]
})

let app = new Vue({
    router,
    el : "#app",
})
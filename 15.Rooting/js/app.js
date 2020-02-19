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
            component:listPrograming
        },
        {
            path:'/listsPrograming-new',
            component:listPrograming
        },
        {
            path:'*',
            component:{
                template:'#pagNotFind'
            }
        }
    ]
})

let app = new Vue({
    router,
    el : "#app",
    mounted(){
        console.log(this.$route)
    }
})
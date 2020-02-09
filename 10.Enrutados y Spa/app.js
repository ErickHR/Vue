const foo = { template: "<div>foo</div>" }
const bar = { template: "<div>bar</div>" }
const prueba = { template: "<div>Esto es una prueba</div>" }

const routes = [
    {path:'/foo', component:foo},
    {path:'/bar', component:bar},
    {path:'/prueb', component:prueba}
]

const router = new VueRouter({
    routes
})

let app = new Vue({
    el : "#app",
    router,
    data : {
        nombre : 'juan',
        numero : 13,
        cant : 0,
        mensaje:'', 
        p_error:true
    },
})
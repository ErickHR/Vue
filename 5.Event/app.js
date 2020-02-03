let app = new Vue({
    el : "#app",
    data : {
        nombre : 'juan',
        numero : 13,
        cant : 0
    },
    computer : {
        
    },
    methods : {
        incrementar (){
            this.numero ++
        },
        decrementar(){
            this.numero--
        },
        
    }
})
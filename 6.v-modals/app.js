let app = new Vue({
    el : "#app",
    data : {
        nombre : 'juan',
        numero : 13,
        cant : 0,
        mensaje:'', 
        error:true
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
    },
    watch : {
        numero:function (val){
            console.log("wacth: "+val);
            
        }
    }
})
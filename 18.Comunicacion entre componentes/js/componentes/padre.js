Vue.component('padre', {
    template:
    `
    <div class="container-fluid bg-dark p-5"> 
        <h2>Componente Padre {{cantidad}}</h2> 
        {{nombrePadre}}
        <button @click="cantidad++">cantidad++</button>
        <hijo :cant="cantidad" @nombrehijo="nombrePadre = $event" @sumar="suma"></hijo>
    </div>
    `,
    data(){
        return{
            cantidad: 0,
            nombrePadre:''
        }
    },
    methods:{
        suma(){
            this.cantidad++
        }
    }
})
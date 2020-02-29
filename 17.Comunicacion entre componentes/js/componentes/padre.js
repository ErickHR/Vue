Vue.component('padre', {
    template:
    `
    <div class="container-fluid bg-dark p-5"> 
        <h2>Componente Padre {{cantidad}}</h2> 
        <button @click="cantidad++">cantidad++</button>
        <hijo :cant="cantidad"></hijo>
    </div>
    `,
    data(){
        return{
            cantidad: 0
        }
    }
})
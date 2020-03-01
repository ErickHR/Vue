Vue.component('titulo',{
    template:
    `
    <div>
        <h1>numero{{numero}}</h1> 
        <button @click="$store.state.numero++">+</button>

        <hijo></hijo>
    </div>
    `,
    computed:{
        ...Vuex.mapState(['numero'])
    }
})
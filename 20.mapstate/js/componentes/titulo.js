Vue.component('titulo',{
    template:
    `
    <div>
        <h1>numero{{$store.state.numero}}</h1> 
        <button @click="$store.state.numero++">+</button>

        <hijo></hijo>
    </div>
    `
})
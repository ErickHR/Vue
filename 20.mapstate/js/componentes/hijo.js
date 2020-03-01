Vue.component('hijo',{
    template:
    `
    <div>
        hijo {{$store.state.numero}}
        <button @click="$store.commit('aumentar')">+</button>

    </div>
    `
})
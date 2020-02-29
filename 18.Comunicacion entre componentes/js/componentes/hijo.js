Vue.component('hijo',{
    template:
    `
    <div class="container-fluid p-5 bg-warning">
        <h2>Componente hijo {{cant}}</h2>
        <button @click="$emit('sumar')">cantidad++</button>
        <h4>nombre: {{nombre}}</h4>    
    </div>
    `,
    props:[
        'cant'
    ],
    data(){
        return{
            nombre:'Erick'
        }
    },
    mounted(){
        this.$emit('nombrehijo', this.nombre )
    }
})
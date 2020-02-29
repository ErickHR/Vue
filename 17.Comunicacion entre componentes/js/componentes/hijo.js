Vue.component('hijo',{
    template:
    `
    <div class="container-fluid p-5 bg-warning">
        <h2>Componente hijo {{cant}}</h2>
    </div>
    `,
    props:[
        'cant'
    ]
})
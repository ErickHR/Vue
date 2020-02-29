const listPrograming = {
    name:"listsPrograming-new",
    template:`
    <div>
    <modal-slots :key="2" :idModal=">
            <div slot="titulo">
                <h5 class="modal-title" id="exampleModalLongTitle">two-este es un titulo desde el slot</h5>
            </div>
            <p>esto es un contenido para el modal-slots-two</p>

        </modal-slots>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
            Launch demo modal-two
        </button>
        <ul>
            <li v-for='l in lenguajes'>{{l}}</li>
        </ul>
    </div>
    `,
    data:function(){
        return{
            idModal:'One',
            lenguajes:["JavaScript", "Java", "C++"],
            texto:''
        }
    }
}
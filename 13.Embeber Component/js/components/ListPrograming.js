const listPrograming = {
    name:"listPrograming",
    template:`
    <div>
        <ul>
            <li v-for='l in lenguajes'>{{l}}</li>
        </ul>
    </div>
    `,
    data:function(){
        return{
            lenguajes:["JavaScript", "Java", "C++"]
        }
    }
}
const Lists = {
    name:"Lists",
    template: `
    <div>
        <ul>
            <li v-for='p in personas'>{{p}}</li>
        </ul>
    </div>
    `,
    data:function(){
        return{
            personas:["Erick", "Isaac", "Juan"]
        }
    }
}
let app = new Vue({
    el : "#app",
    data : {
        message : 'Hola Erick',
        edad : 20,
        valor : '4',
        personas : ['Erick', 'Rivas', 'Juan']
    },
    // trabaja con la memoria caché
    computed : {
        reverseMessague : function () {
            return this.message.split('').reverse().join('')
        }
    },
    methods : {
        suma(edad, tiempo){
            return edad + tiempo
        }
    }
})
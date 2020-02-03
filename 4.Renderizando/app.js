let app = new Vue({
    el : "#app",
    data : {
        message : 'Hola Erick',
        edad : 20,
        valor : '4',
        personas : ['Erick', 'Rivas', 'Juan'],
        content_html : '<h1> Hola Erick </h1>',
        src: 'data:image/jpeg;base64,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'
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
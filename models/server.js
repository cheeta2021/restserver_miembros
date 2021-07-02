
const express = require('express')



class Server {
    constructor() {
        this.app  = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //Middlewares
        this.middlewares()

        //Rutas de la Aplicacion
        this.routes()
    }

    middlewares() {

        // CORS
        //this.app.use( cors() )

        //Lectura y Parseo del Body
        this.app.use( express.json() )

        //Directorio Publico
        this.app.use( express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el Puerto: ', this.port)
        })
    }
}

module.exports = Server
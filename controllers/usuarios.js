const { response } = require('express')



const usuariosGet = (req = request, res = response ) => {

    //const query = req.query
    const { q, nombre='Sin Nombre', apikey, pagina, limit} = req.query

    res.json({
        Ok: true,
        msg: 'Get API - controlador ',
        q,
        nombre,
        apikey,
        pagina, 
        limit
    })
  }


  const usuariosPut = (req, res = response) => {

    const id = req.params.id

    res.json({
        Ok: true,
        msg: 'Put API - controlador',
        id
    })
  }

  const usuariosPost = (req, res = response) => {

    const {Nombre, edad, Domicilio} = req.body

    res.json({
        Ok: true,
        msg: 'Post API - controlador',
        Nombre, edad, Domicilio 
    })
  }

const usuariosDelete = (req, res = response) => {
    res.json({
        Ok: true,
        msg: 'Delete API - controlador'
    })
  }
  
  const usuariosPatch = (req, res = response) => {
    res.json({
        Ok: true,
        msg: 'Patch API - controlador'
    })
  }
  
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
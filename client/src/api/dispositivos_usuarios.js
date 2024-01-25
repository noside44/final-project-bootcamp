import axios from 'axios'

function getDispositivosUsuario(){
    return axios.get(`http://localhost:8000/usuariodis/api/usuariodis/`)
}

// function getUsuario(id){
//     return axios.get(`http://localhost:8000/usuario/api/usuario/${id}/`)
// }

// function createUsuarios(usuario){
//     return axios.post('http://localhost:8000/usuario/api/usuario/', usuario)
// }

// function deleteUsuario(id){
//     return axios.delete(`http://localhost:8000/usuario/api/usuario/${id}/`)
// }

// function updateUsuario(id, usuario){
//     return axios.put(`http://localhost:8000/usuario/api/usuario/${id}/`, usuario)
// }

export {getDispositivosUsuario}
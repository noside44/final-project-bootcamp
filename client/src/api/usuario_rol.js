import axios from 'axios'

function getUsuarioRol(id){
    return axios.get(`http://localhost:8000/rol/api/usuariorol/${id}/`)
}
function getRol(id_rol){
    return axios.get(`http://localhost:8000/usuariorol/api/rol/${id_rol}/`)
}

export { getUsuarioRol, getRol }
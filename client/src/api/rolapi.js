import axios from "axios"

function getRoles(){
    return axios.get('http://localhost:8000/rol/api/rol/')
}

function getRol(id_rol){
    return axios.get(`http://localhost:8000/rol/api/rol/${id_rol}/`)
}

function createRoles(rol){
    return axios.post('http://localhost:8000/rol/api/rol/', rol)
}

function deleteRol(id_rol){
    return axios.delete(`http://localhost:8000/rol/api/rol/${id_rol}/`)
}

function updateRoles(id_rol, rol){
    return axios.put(`http://localhost:8000/rol/api/rol/${id_rol}/`, rol)
}
export { getRoles, getRol, createRoles, deleteRol, updateRoles }
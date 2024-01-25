import axios from "axios";

function getDevices(){
    return axios.get('http://localhost:8000/dispositivo/api/dispositivo/')
}

function getDevice(id){
    return axios.get(`http://localhost:8000/dispositivo/api/dispositivo/${id}/`)
}

function createDevices(device){
    return axios.post('http://localhost:8000/dispositivo/api/dispositivo/', device)
}

function deleteDevices(id){
    return axios.delete(`http://localhost:8000/dispositivo/api/dispositivo/${id}/`)
}

function editDevices(id, data){
    return axios.put(`http://localhost:8000/dispositivo/api/dispositivo/${id}/`, data)
}


export {getDevices, createDevices, deleteDevices, editDevices, getDevice}
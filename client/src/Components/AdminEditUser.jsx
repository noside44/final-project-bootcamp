import '../Styles/AdminEditUser.css'
import { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Modal } from "react-bootstrap";
import { updateUsuario, getUsuario } from '../api/usuarios.api';
import { useForm } from 'react-hook-form'
import { UserList } from './UserList';
import { Navigate, useNavigate } from 'react-router-dom';

function AdminEditUser( {show, fullscreen, setShow, handleShow, id} ){
  
  // const [updateName, setUpdateName] = useState(editName)
  // const [updateEmail, setUpdateEmail] = useState(data.email)
  const {register, handleSubmit, setValue} = useForm();

  //función para actualizar los datos de usuario
  const navigate = useNavigate()
  const onSubmit = handleSubmit( async(data) => {
    const res = await updateUsuario(id, data)
    window.location.reload()
    setShow(false)
    navigate("/UserList")
  })

// Obtener usuario por id y asignar valores al input
  useEffect(() => {
    if(id){
      async function loadUser(){
        const res = await getUsuario(id)
        // console.log(res, id)
        setValue('nombresapellidosusuarios', res.data.nombresapellidosusuarios)
        setValue('emailusuario', res.data.emailusuario)
        setValue('contrasenausuario', res.data.contrasenausuario)
        setValue('idusuario', res.data.idusuario)
      }
      loadUser()
    }
  },[id])

  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
      className="edituser-container d-flex flex-column align-items-center">
      <form 
        className="edituser-info d-flex flex-column col-lg-8 mx-auto"
        onSubmit={onSubmit}
      >
        <IoIosCloseCircle 
            className="icon-close bg-transparent ms-3 d-flex flex-row align-self-end"
            onClick={() => setShow(false)}
        />
        <label className='label'> Documento(id):</label>
        <input 
          className="edit-input ps-1 mb-4" 
          type="text" 
          placeholder="id"
          {...register("idusuario")}
        />
        <label className='label'> Nombre:</label>
        <input 
          className="edituser-input mb-4 ps-1" 
          type="text" 
          placeholder="Nombres y Apellidos"
          {...register("nombresapellidosusuarios")}
        />
        <label className='label'>Correo electrónico:</label>
        <input 
          className="edit-input ps-1 mb-4" 
          type="text" 
          placeholder="Correo electrónico"
          {...register("emailusuario")}
        />
        <label className='label'>Contraseña:</label>
        <input 
          className="edit-input ps-1" 
          type="password" 
          placeholder="Contraseña"
          {...register("contrasenausuario")}
        />
        <button className="update-user-btn mt-5 mx-auto text-primary mb-3">
          Actualizar
        </button>
      </form>
    </Modal>
  )
}

export { AdminEditUser }
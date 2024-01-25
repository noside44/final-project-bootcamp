import { useState, useEffect } from 'react'
import { app_devices, data } from './data'
import '../Styles/ChangePassword.css'
import { Modal } from 'react-bootstrap'
import { Menu } from './Menu'
import { IoIosCloseCircle } from "react-icons/io";
import {useForm} from "react-hook-form";
import { updateUsuario, getUsuario } from '../api/usuarios.api'

function ChangePassword( {show, fullscreen, setShow, handleShow} ){

  const {register, handleSubmit, setValue} = useForm()
  const id = sessionStorage.getItem("loggedUser")

  // const navigate = useNavigate()
  const onSubmit = handleSubmit( async(data) => {
    // const res = await updateUsuario(id, data)
    console.log({data})
    console.log({id})
    // window.location.reload()
    setShow(false)
  })

// Obtener usuario por id y asignar valores al input
  useEffect(() => {
    if(id){
      async function loadUser(){
        const res = await getUsuario(id)
        console.log(res)
        setValue('contrasenausuario', res.data.contrasenausuario)
        setValue('nombresapellidosusuarios', res.data.nombresapellidosusuarios)
        setValue('emailusuario', res.data.emailusuario)
        setValue('idusuario', res.data.idusuario)
      }
      loadUser()
    }
  },[id])

  function checkPass(){
    
  }

  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
      className="password-container d-flex flex-column align-items-center">
      <form 
        className="change-pass d-flex flex-column mx-auto col-md-4"
        onSubmit = {onSubmit}
      >
        <IoIosCloseCircle 
          className="new-close-icon ms-3 bg-transparent d-flex flex-row align-self-end"
          onClick={() => setShow(false)}
        />
        <label className='label'> Escriba la nueva contraseña:</label>
        <input 
          className="edituser-input mb-4 ps-1" 
          type="password" placeholder="Escriba la nueva contraseña"
          name = "pass1" 
        />
        <label className='label'> Escriba nuevamente la contraseña:</label>
        <input 
          className="edit-input ps-1" 
          type="password" 
          placeholder="Escriba nuevamente la contraseña"
          {...register("contrasenausuario")}
          name = "pass2"
        />
        <button 
          className="update-pass-btn mt-5 mb-3 mx-auto text-primary"
          onClick = { () => checkPass}
        >
          Actualizar
        </button>
      </form>
    </Modal>
  )
}

export { ChangePassword }
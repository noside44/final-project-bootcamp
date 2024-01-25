import { useEffect, useState } from "react";
import "../Styles/EditMyProfile.css"
import { IoIosCloseCircle } from "react-icons/io";
import { data } from "./data"
import { Modal } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import { getUsuario, updateUsuario } from "../api/usuarios.api";

function EditMyProfile( {show, fullscreen, setShow, handleShow, id} ){

  const {register, handleSubmit, setValue} = useForm()

  const onSubmit = handleSubmit( async (data) => {
    updateUsuario(id, data)
    window.location.reload()
  })

  useEffect(() => {
    async function loadUser(){
      const {data} = await getUsuario(id)

    setValue('nombresapellidosusuarios',data.nombresapellidosusuarios)
    setValue('emailusuario',data.emailusuario)
    setValue('contrasenausuario',data.contrasenausuario)
    setValue('idusuario',data.idusuario)
    }
    loadUser()
  }, [id])

  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
      className="edit-profile-container d-flex flex-column align-items-center">
      <form 
        className="newuser-container d-flex flex-column col-lg-8 mx-auto justify-items-end p-3"
        onSubmit = {onSubmit}
      >
        <IoIosCloseCircle 
            className="icon-close bg-transparent ms-3 d-flex flex-row align-self-end" 
            onClick={() => setShow(false)}
        />
        <label className="update-label bg-transparent mb-2">Nombre:</label>
        <input 
          className="edit-input mb-4 ps-1" 
          type="text" placeholder="Nombres y Apellidos"
          {...register('nombresapellidosusuarios')} 
        />
        <label className="update-label bg-transparent mb-2">Correo electrónico:</label>
        <input 
          className="edit-input ps-1" 
          type="text" 
          placeholder="Correo electrónico"
          {...register('emailusuario')}
        />
        <button className="update-btn mt-5 mb-3 mx-auto text-primary">
          Actualizar
        </button>
      </form>
    </Modal> 
  )
}

export { EditMyProfile }
import '../Styles/CreateUser.css'
import { IoIosCloseCircle } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form'
import {createUsuarios} from '../api/usuarios.api'

function CreateUser( {show, fullscreen, setShow, handleShow} ){

  const {register, handleSubmit} = useForm();
  const onSubmit = handleSubmit(async data => {
    const res = await createUsuarios(data)
    setShow(false)
    window.location.reload()
  })
  
  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
      className="create-container d-flex flex-column align-items-center">
      <form onSubmit={onSubmit} 
        className="newuser-container d-flex flex-column col-lg-8 mx-auto"
      >
        <IoIosCloseCircle 
            onClick={() => setShow(false)} 
            className="icon-close d-flex flex-row align-self-end mb-3"
        />
        <input 
          className="edit-input mb-3 ps-1" 
          type="text" 
          placeholder="Documento (id)"
          {...register("idusuario")} 
        />
        <input 
          className="edit-input mb-3 ps-1" 
          type="text" placeholder="Nombres y Apellidos"
          {...register("nombresapellidosusuarios")} 
        />
        <input 
          className="edit-input mb-3 ps-1" 
          type="text" 
          placeholder="Correo electrónico"
          {...register("emailusuario")} 
        />
        <input 
          className="edit-input ps-1" 
          type="text" 
          placeholder="contraseña"
          {...register("contrasenausuario")} 
        />
        <button 
          className="create-user-btn mt-5 mb-3 mx-auto text-primary"
          onClick={() => window.location.reload()}
        >
          Crear Usuario
        </button>
      </form>
    </Modal> 
  ) 
}

export { CreateUser }

// yup ,zod
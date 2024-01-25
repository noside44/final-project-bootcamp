import '../Styles/CreateUser.css'
import { IoIosCloseCircle } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form'
import {createRoles} from '../api/rolapi'

function CreateRol( {show, fullscreen, setShow, handleShow} ){

  const {register, handleSubmit} = useForm();
  const onSubmit = handleSubmit(async data => {
    const res = await createRoles(data)
    // console.log(res.data)
    setShow(false)
  })
  
  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
      className="create-container d-flex flex-column align-items-center">
      <form onSubmit={onSubmit} 
        className="newuser-container col-lg-8 mx-auto d-flex flex-column">
        <IoIosCloseCircle
          className="icon-close d-flex flex-row align-self-end"
          onClick={() => setShow(false)} 
        />
        <input 
          className="edit-input mb-3 ps-1 mt-3" 
          type="text" placeholder="Nombre del Rol"
          {...register("nombrerol")} 
        />
        <input 
          className="edit-input ps-1" 
          type="text" 
          placeholder="id rol"
          {...register("idrol")} 
        />
        <button 
          className="create-user-btn btn btn-light mt-5 mb-3 mx-auto text-primary"
          onClick={() => window.location.reload()}
        >
          Crear Rol
        </button>
      </form>
    </Modal> 
  ) 
}

export { CreateRol }
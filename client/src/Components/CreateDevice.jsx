import '../Styles/CreateUser.css'
import { Modal } from 'react-bootstrap'
import { IoIosCloseCircle } from "react-icons/io";
import { useForm } from 'react-hook-form'
import { createDevices } from '../api/dispositivosapi';

function CreateDevice( {show, fullscreen, setShow, handleShow} ){

  const {register, handleSubmit} = useForm()

  const onSubmit = handleSubmit( async (data) =>{
    await createDevices(data)
    setShow(false)
    window.location.reload()
  })

  

  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
      className="create-container d-flex flex-column align-items-center">
      <form 
        className="newuser-container col-lg-8 d-flex flex-column mx-auto"
        onSubmit={onSubmit}
      >
        <IoIosCloseCircle 
            className="icon-close d-flex flex-row align-self-end" 
            onClick={() => setShow(false)}
        />
        <Modal.Header className="close-icon bg-none border-0 rounded-circle p-0">
          
        </Modal.Header>
        <input 
          className="edit-input mb-3 ps-1 mt-3" 
          type="text" placeholder="Nombre del nuevo dispostivo"
          {...register('nombredispositivo')}
        />
        <input 
          className="edit-input ps-1" 
          type="text" 
          placeholder="Referencia de Dispositivo"
          {...register('referenciadispositivo')}
        />
        <button className="create-user-btn col-6 mt-5 mb-2 mx-auto text-primary">
          Crear Dispositivo
        </button>
      </form>
    </Modal> 
  )
}

export { CreateDevice }
import '../Styles/ConfirmDeleteUser.css'
import { Modal } from "react-bootstrap"
// import { IoIosCloseCircle } from "react-icons/io";
import { deleteDevices } from '../api/dispositivosapi';

function ConfirmDeleteDevice( {show, fullscreen, setShow, handleShowEdit, id} ){

  async function acceptDelete(){
    await deleteDevices(id)
    window.location.reload()
    setShow(false)
  }

  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
      className="confirm-delete d-flex flex-column align-items-center">
      <div className="deleteuser-container col-lg-8 mx-auto">
        {/* <IoIosCloseCircle className="icon-close bg-transparent d-flex flex-row align-self-end" 
          onClick={() => setShow(false)}
        /> */}
        <p className="deleteuser-title bg-transparent text-center mt-5 mb-4">¿Realmente desea eliminar el dispositivo?</p>
        <div className='text-center bg-transparent mb-5 mt-5 pt-2'>
          <button type="close" className="delete-btn mx-3 text-primary" onClick={() => setShow(false)}>
            Cancelar
          </button>
          <button 
            className="delete-btn mx-3 text-primary"
            onClick={ () => acceptDelete(id)}
          >
            Aceptar
          </button>
        </div>
      </div>
    </Modal> 
  )
}

export { ConfirmDeleteDevice }
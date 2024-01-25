import '../Styles/ConfirmDeleteUser.css'
import { Modal } from "react-bootstrap"
import { IoIosCloseCircle } from "react-icons/io";
import { deleteRol } from '../api/rolapi';

function DeleteRol( {show, fullscreen, setShow, handleShowEdit, idRol} ){

  async function acceptDel(){
    await deleteRol(idRol)
    window.location.reload()
    setShow(false)
  }

  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
      className="confirm-delete d-flex flex-column align-items-center">
      <div className="deleteuser-container col-lg-8 mx-auto">
        {/* <IoIosCloseCircle 
          className="icon-close bg-transparent d-flex flex-row align-self-end" 
          onClick={() => setShow(false)}
        /> */}
        <p className="deleteuser-title bg-transparent text-center mt-5 mb-5">¿Realmente desea eliminar el rol de usuario?</p>
        <div className='text-center bg-transparent'>
          <button type="close" className="delete-btn mx-3 text-primary" onClick={() => setShow(false)}>
            Cancelar
          </button>
          <button 
            className="delete-btn mx-3 mb-5 text-primary"
            onClick={ () => acceptDel(idRol)}
          >
            Aceptar
          </button>
        </div>
      </div>
    </Modal> 
  )
}

export { DeleteRol }
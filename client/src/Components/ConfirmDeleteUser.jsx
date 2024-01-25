import "../Styles/ConfirmDeleteUser.css"
import { Modal } from "react-bootstrap"
import { IoIosCloseCircle } from "react-icons/io";
import { deleteUsuario } from  '../api/usuarios.api'
import { useContext, useEffect } from "react";
import { UserContext } from "../Context/User/UserContext";


function ConfirmDeleteUser( {show, fullscreen, setShow, handleShowEdit, id} ){

  const acceptDelete =  async() => {
    await deleteUsuario(id)
    window.location.reload()
  }

  // async function acceptDelete(){
  //   await deleteDevices(id)
  //   // console.log(id)
  //   setShow(false)
  // }


  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
      className="confirm-delete d-flex flex-column align-items-center">
      <div className="deleteuser-container col-lg-8 mx-auto">
        {/* <IoIosCloseCircle className="icon-close bg-transparent d-flex flex-row align-self-end" 
          onClick={() => setShow(false)}
        /> */}
        <p className="deleteuser-title text-center bg-transparent mt-5 mb-4">¿Realmente desea eliminar el usuario?</p>
        <div className="text-center bg-transparent mb-5 mt-5 pt-2">
          <button className="delete-btn mx-3 text-primary" onClick={() => setShow(false)}>
            Cancelar
          </button>
          <button
            className="delete-btn mx-3 text-primary"
            onClick={() => acceptDelete(id)}
          >
            Aceptar
          </button>
        </div>
      </div>
    </Modal> 
  )
}

export { ConfirmDeleteUser }
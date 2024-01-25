import "../Styles/ViewProfile.css"
import {data} from "./data"
import { FaUserCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import { useContext, useEffect } from "react";
import { UserContext } from "../Context/User/UserContext";

function ViewProfile( {show, fullscreen, setShow, handleShow, rolid} ){

  const { getUsuario, selectedUser} = useContext(UserContext)
  const id = sessionStorage.getItem("loggedUser")
  const Profile = {...selectedUser}

  useEffect(() => {
    getUsuario(id)
  }, [])

  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
    className="myprofile-container d-flex flex-column align-items-center">
      <div className="myprofile-info d-flex flex-column col-md-8 mx-auto justify-items-end">
      {/* <Modal.Header className="close-icon bg-none border-0 rounded-circle p-0">
      </Modal.Header> */}
        <IoIosCloseCircle 
          className="icon-close bg-transparent d-flex flex-row align-self-end"
          onClick={() => setShow(false)}
        />
        <FaUserCircle className="myprofile-icon mx-auto mb-3 mt-3 bg-transparent justify-content-end"/>
        <h3 className="text-light text-center mb-1 bg-transparent">{Profile.nombresapellidosusuarios}</h3>
        <p className="text-light text-center mb-2 bg-transparent">{rolid === 1 ? "Administrador" : "usuario" }</p>
      </div>
    </Modal> 
  )
}

export { ViewProfile }
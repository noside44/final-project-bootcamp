import "../Styles/Menu.css"
import {data} from "./data"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineStarOutline } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoFingerPrintOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineDevicesOther } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { ChangePassword } from "./ChangePassword";
import { getUsuarioRol } from "../api/usuario_rol"

function Menu(){

  const [rol, setRol] = useState("")
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const id = sessionStorage.getItem("loggedUser")

  useEffect( () => {
    async function getRol() {
      const res = await getUsuarioRol(id)
      setRol(res.data)
    }
    getRol()
  }, [id])

  return(
    <>
      <nav className="navbar-menu py-0 border-bottom border-secondary">
        <ul className="nav border-bottom border-dark w-100">
            <Link to="/Home" className="nav-link active" aria-current="page">
              <FaArrowLeftLong className="logo-nav"/>
            </ Link>
            <h3 className="mb-0 pt-2 bg-transparent text-light">Menú</h3>
            {/* <a className="nav-link fav-icon " href="#">
              <MdOutlineStarOutline  className="logo-nav"/>
            </a>
            <a className="nav-link options-icon" href="#">
              <BsThreeDotsVertical className="logo-nav"/>
            </a> */}
        </ul>
      </nav>
      <main className="menu-container text-start border-bottom border-secondary-subtle mx-3 mt-4">
        <div className="col">
          <section className="general-section">
            <div className="col ps-1 text-light">
              General
            </div>
            <div className="col d-flex flex-row mt-3">
              <FaUserCircle className="logo1"/>
              <Link to="/UpdateMyProfile" className="nav-link active">
                <p>Perfil</p>
              </Link>
            </div>
            <div 
              className="col d-flex flex-row border-bottom border-secondary-subtle pb-2"
              onClick={() => setShow(true)}
            >
              <IoFingerPrintOutline className="logo1"/>
              <Link className="nav-link active">
                <p>Seguridad</p>
              </Link>
            </div>
          </section>
          {
              rol.rol_idrol === 1 ? 
          <section>
            <div className="col ps-1 mt-4 mb-3 text-light">
              Servicios
            </div>
            <div className="col d-flex flex-row">
              <FaUsers className="logo1"/>
              <Link to = "/UserList" className="nav-link active">
                <p>Usuarios</p>
              </Link>
            </div> 
            <div className="col d-flex flex-row">
              <MdOutlineDevicesOther className="logo1"/>
              <Link to= "/DeviceList" className="nav-link active">
                <p>Dispositivos</p>
              </Link>
            </div>
            <div className="col d-flex flex-row">
              <RiUserSettingsLine className="logo1"/>
              <Link to= "/RolList" className="nav-link active">
              <p>Roles</p>
              </Link>
            </div>              
          </section>
          : null
        }
        </div>
        <ChangePassword fullscreen={fullscreen} show={show} setShow={setShow}/>
      </main>
    </>
  )
}

export { Menu }
import { useState } from "react";
import "../Styles/NavComponent.css"
import { MdOutlineSearch } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ViewProfile } from "./ViewProfile";
import { getUsuarioRol } from "../api/usuario_rol"
import { useEffect } from "react";


function NavComponent(){
  
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [rol, setRol] = useState("")

  const id = sessionStorage.getItem("loggedUser")

  useEffect( () => {
    async function getRol() {
      const res = await getUsuarioRol(id)
      setRol(res.data)
      // console.log({rol})
    }
    getRol()
  }, [id])

  function handleShow() {
    setFullscreen();
    setShow(true);
  }

  function logout(){
    sessionStorage.removeItem("loggedUser");
  }

  const rolid = rol.rol_idrol
  // console.log({rol})

  return (
  <div>
    <Navbar data-bs-theme="dark" className="navbar-main border-bottom border-secondary">
      {/* <Container className="navbar-container bg-none m-0 p-0 align-content-between"> */}
        <Navbar.Brand as = {Link} to="/Menu" className="nav-link active">
          <TiThMenu className="logo bg-transparent ms-3"/>
        </Navbar.Brand>
        <Navbar.Brand as = {Link} to="/Home" className="nav-link active">
          <h5 className="text-light bg-transparent pt-2">Parce App</h5>
        </Navbar.Brand>
        <Nav className="ms-auto bg-transparent">
          <Navbar.Brand as = {Link} to="/" className="nav-link bg-transparent active m-0 fs-6 p-0" onClick = {logout}>
            <p className="logout bg-transparent m-0">Cerrar Sesión</p>
          </Navbar.Brand>
          <Navbar.Brand className="nav-link active" onClick={() => handleShow()}>
            <FaUserCircle className="logo bg-transparent"/>  
          </Navbar.Brand>
        </Nav>
      {/* </Container> */}
    </Navbar>
    <ViewProfile fullscreen={fullscreen} show={show} setShow={setShow} rolid={rolid}/>
    
  </div>     
     
    )
}

export{ NavComponent }
import { useState } from "react";
import "../Styles/UpdateMyProfile.css"
import { data } from "./data"
import { NavComponent } from "./NavComponent"
import { MdModeEdit } from "react-icons/md";
import { EditMyProfile } from "./EditMyProfile";
import { Main } from "./UserMainHome";
import { useContext, useEffect } from "react";
import { UserContext } from "../Context/User/UserContext";

function UpdateMyProfile(){

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const { getUsuario, selectedUser} = useContext(UserContext)
  const id = sessionStorage.getItem("loggedUser")
  const Profile = {...selectedUser}

  useEffect(() => {
    // console.log({Profile})
    getUsuario(id)
  }, [])

  function handleShow() {
    setFullscreen();
    setShow(true);
  }

  return(
    <div className="update-myprofile">
      <nav>
        <NavComponent />
      </nav>
      <section>
        <div className="profile-pic mx-auto mt-5 mb-4 d-flex align-items-center justify-content-center">
            <p className="mb-0 bg-transparent">{`${Profile.nombresapellidosusuarios}`[0]}</p>
        </div>
        <div className="update-container d-flex flex-row justify-content-center">
          <div className="personal-data pe-5 border-end border-dark-subtle">
            <h6 className="mb-2 text-start text-light">{Profile.nombresapellidosusuarios}</h6>
            <p className="mb-0 text-light">{Profile.emailusuario}</p>
          </div>
          <MdModeEdit className="edit-icon logo my-auto ms-3" onClick={() => handleShow()}/>
        </div>
        <EditMyProfile fullscreen={fullscreen} show={show} setShow={setShow} id={id} Profile={Profile}/>
        </section>
    </div>
  )
}

export {UpdateMyProfile}
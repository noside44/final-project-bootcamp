import "../Styles/UserList.css"
import { useState, useEffect } from "react";
import { NavComponent } from "./NavComponent"
import profileImg from "../Assets/img/no-photo.png"
import { MdModeEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsTrash3Fill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
// import { IoMdAddCircle } from "react-icons/io";
import { CreateUser } from "./CreateUser";
import { ConfirmDeleteUser } from "./ConfirmDeleteUser";
import { AdminEditUser } from "./AdminEditUser";
import { useContext } from "react";
import { UserContext } from "../Context/User/UserContext";

function UserList(){

  const{ getUsuarios, users, getUsuario } = useContext(UserContext)

// Hooks para obtener la data

  useEffect(() => {
    getUsuarios()
  }, [])
  
// Hooks para los modals de eliminar, editar
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [id, setId]= useState("")
  

  function handleShow() {
    setFullscreen();
    setShow(true);
  }

  function handleShowDelete() {
    setFullscreen();
    setShowDelete(true);
  }

  function handleShowEdit() {
    setFullscreen();
    setShowEdit(true);
  }

  return(
    <>
    <div>
      <nav>
        <NavComponent />
      </nav>
      <section className="container user-list-container d-flex justify-content-center">
        <div className="row w-100 mx-auto justify-content-center">
          {users.map( usuario =>
            <div  className="col-sm-10 col-md-5 col-lg-5 user-info d-flex justify-content-between p-2 m-3 rounded ">
              <FaUser className="user-img bg-transparent" />
              <div className="bg-transparent">
                <div className="text-start bg-transparent">
                  <h5 className="mb-0 bg-transparent text-light">{usuario.nombresapellidosusuarios}</h5>
                  <p className="mb-0 bg-transparent text-light">{usuario.emailusuario}</p>
                </div>
                <div className="text-end mt-2 bg-transparent">
                  <MdModeEdit className="edit-logo logo me-2 bg-transparent" 
                    onClick={ () => 
                      {
                        handleShowEdit()
                        setId(usuario.idusuario) 
                      }
                    }
                    />
                  <BsTrash3Fill className="delete-logo logo bg-transparent" 
                    onClick={ () => 
                      {
                        handleShowDelete()
                        setId(usuario.idusuario)
                        getUsuario(usuario.idusuario)
                      }
                    }
                  />
                </div>
              </div>
            </div>  
          )}
        </div>  
        <div onClick={() => handleShow()}>
          <FaUserPlus className="add-button bg-transparent" />
        </div>
      </section>
      <CreateUser fullscreen={fullscreen} show={show} setShow={setShow} handleShow={handleShow}/>
      <ConfirmDeleteUser fullscreen={fullscreen} show={showDelete} setShow={setShowDelete} id={id}/>
      <AdminEditUser fullscreen={fullscreen} show={showEdit} setShow={setShowEdit} id={id}/>
    </div>
    </>
  )
}

export { UserList }
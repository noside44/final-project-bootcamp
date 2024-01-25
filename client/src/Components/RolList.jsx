import "../Styles/UserList.css"
import { useState, useEffect } from "react";
import { NavComponent } from "./NavComponent"
import { BsPersonRolodex } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { BsTrash3Fill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { CreateRol } from "./CreateRol";
import { AdminEditUser } from "./AdminEditUser";
import { getRoles } from "../api/rolapi";
import { DeleteRol } from "./DeleteRol";


function RolList(){

  const[roles, setRoles] = useState([])

  useEffect( () => {
    async function callRoles(){
      const res = await getRoles()
      setRoles(res.data)
      // console.log({roles})
    }
    callRoles()
  }, [])


// Hooks para los modals de eliminar, editar
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [idRol, setIdRol]= useState("")
  
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
        <div className="row w-100 mx-auto justify-content-center ">
          {roles.map( rol =>
            <div  className="col-sm-12 col-md-5 user-info d-flex justify-content-between p-2 m-3 rounded ">
              <BsPersonRolodex className="user-img bg-transparent"/>
              <div className="bg-transparent">
                <div className="text-start mt-2 bg-transparent">
                  <h5 className="mb-0 bg-transparent text-light">{rol.nombrerol}</h5>
                  {/* <p className="mb-0">{}</p> */}
                </div>
                <div className="text-end mt-2 bg-transparent">
                  <MdModeEdit className="edit-logo logo me-2 bg-transparent" 
                    onClick={ () => 
                      {
                        handleShowEdit()
                        setIdRol(rol.idrol) 
                      }
                    }
                    />
                  <BsTrash3Fill className="delete-logo logo" 
                    onClick={ () => 
                      {
                        handleShowDelete()
                        setIdRol(rol.idrol)
                      }
                    }
                  />
                </div>
              </div>
            </div>  
          )}
        </div>  
        <div onClick={() => handleShow()}>
          <IoMdAddCircle className="add-button" />
        </div>
      </section>
      <CreateRol fullscreen={fullscreen} show={show} setShow={setShow} handleShow={handleShow}/>
      <DeleteRol fullscreen={fullscreen} show={showDelete} setShow={setShowDelete} idRol={idRol}/>
      {/* <AdminEditUser fullscreen={fullscreen} show={showEdit} setShow={setShowEdit} idRol={idRol}/> */}
    </div>
    </>
  )
}

export { RolList }
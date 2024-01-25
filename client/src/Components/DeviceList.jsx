import { useState, useEffect } from "react";
import "../Styles/DeviceList.css"
import { app_devices } from "./data";
import { NavComponent } from "./NavComponent"
import { CreateDevice } from "./CreateDevice";
import { MdModeEdit } from "react-icons/md";
import { BsTrash3Fill } from "react-icons/bs";
// import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineAddToQueue } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { RiRemoteControl2Fill } from "react-icons/ri";
import { MdBlinds } from "react-icons/md";
import { AdminEditDevice } from "./AdminEditDevice";
import { ConfirmDeleteDevice } from "./ConfirmDeleteDevice";
import { getDevices } from "../api/dispositivosapi";

function DeviceList(){

  const[dispositivos, setDispositivos] = useState([])

  useEffect( () => {
    async function callDevices(){
      const res = await getDevices()
      setDispositivos(res.data)
      console.log(res)
    }
    callDevices()
  }, [])

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const[id, setId]= useState("")

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
    <div>
      <nav>
        <NavComponent />
      </nav>
      <section className="container text-center device-list-container justify-content-center">
        <div className="row w-100 mx-auto justify-content-center ">
          {dispositivos.map ( dispositivo =>  
            <div key={dispositivos.referenciadispositivo} className="col-sm-10 col-md-5 col-lg-5 device-info d-flex justify-content-between p-2 m-3 rounded">
              {dispositivo.iddispositivo === 1 ? <HiLightBulb className="logo-device"/> : dispositivo.iddispositivo === 2 ? <MdBlinds className="logo-device"/> : <RiRemoteControl2Fill className="logo-device"/>}
              <div className="bg-transparent">
                <div className="text-start bg-transparent" >
                  <h5 className="mb-0 text-light bg-transparent">{dispositivo.nombredispositivo}</h5>
                  <p className="mb-0 text-light bg-transparent" >Referencia: {dispositivo.referenciadispositivo}</p>
                </div>
                <div className="text-end mt-2 bg-transparent">
                  <IoBarChartSharp className="stats-device-logo logo bg-transparent"/>
                  <MdModeEdit 
                    className="edit-device-logo logo mx-2 bg-transparent" 
                    onClick = {() => 
                      {
                        handleShowEdit()
                        setId(dispositivo.iddispositivo)
                      }
                    }
                  />  
                  <BsTrash3Fill 
                    className="delete-device-logo logo bg-transparent" 
                    onClick = {() => 
                      {
                        handleShowDelete()
                        setId(dispositivo.iddispositivo)
                      } 
                    }
                  /> 
                </div>
              </div>
            </div>
          )}
        </div>
        <MdOutlineAddToQueue className="add-button bg-transparent" onClick={ () => handleShow()}/>
      </section>
      <CreateDevice fullscreen={fullscreen} show={show} setShow={setShow}/>
      <AdminEditDevice fullscreen={fullscreen} show={showEdit} setShow={setShowEdit} id={id}/>
      <ConfirmDeleteDevice fullscreen={fullscreen} show={showDelete} setShow={setShowDelete} id={id}/>
    </div>
  )
}

export { DeviceList }
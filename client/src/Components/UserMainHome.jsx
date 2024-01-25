import { useState, useEffect } from "react";
// import "../Styles/DeviceList.css"
import "../Styles/UserMainHome.css"
import { user_devices } from "./data";
import { CreateDevice } from "./CreateDevice";
import { MdModeEdit } from "react-icons/md";
import { BsTrash3Fill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { RiRemoteControl2Fill } from "react-icons/ri";
import { MdBlinds } from "react-icons/md";
import { AdminEditDevice } from "./AdminEditDevice";
import { ConfirmDeleteDevice } from "./ConfirmDeleteDevice";
import { getDispositivosUsuario } from "../api/dispositivos_usuarios";
import { getUsuario } from '../api/usuarios.api';


function UserMainHome(){

  // admin = 1
  // user = 2

  const [dispositivos, setDispositivos] = useState([])
  const [deviceOn, setDeviceOn] = useState("false")
  const id = sessionStorage.getItem("loggedUser")

  useEffect(() => {
    if(id){
      async function loadUser(){
        const res = await getUsuario(id)
      }
      loadUser()
    }
  },[id])

  useEffect( () => {
    async function callDevices(){
      const res = await getDispositivosUsuario()
      setDispositivos(res.data)
    }
    callDevices()
  }, [])
  
  const myDevices = dispositivos.filter( item => item.usuario_idusuario == id)
  console.log({myDevices})

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

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

  function toggleDevice(){
    setDeviceOn(deviceOn => !deviceOn)
  }

  return(
    <div>
       <section className="container text-center device-list-container justify-content-center">
        <div className="row w-100 mx-auto justify-content-center">
          {myDevices.map ( myDevice =>  
            <div  className="col-sm-10 col-md-3 device-info d-flex justify-content-between p-2 m-3 rounded">
              {myDevice.dispositivo_iddispositivo === 1 ? 
              <HiLightBulb className={myDevice.estado_dispositivo === true ? "device-on logo-device" : "logo-device"}/> : myDevice.dispositivo_iddispositivo === 2 ? 
              <MdBlinds className={myDevice.estado_dispositivo === true ? "device-on logo-device" : "logo-device"}/> : 
              <RiRemoteControl2Fill className={myDevice.estado_dispositivo === true ? "device-on logo-device" : "logo-device"}/>}
              <div className="bg-transparent">
                <div className="text-start bg-transparent">
                  <h5 className="mb-0 bg-transparent text-light">
                    {myDevice.nombreusuariodispositivo}
                  </h5>
                  <p className="mb-0 bg-transparent text-light">Referencia: 
                  {myDevice.dispositivo_iddispositivo === 1 ? "001" : myDevice.dispositivo_iddispositivo === 2 ? "002" : "003"}
                  </p>
                </div>
                <div className="text-end mt-2 bg-transparent">
                  <IoBarChartSharp className="stats-device-logo logo"/>
                  <MdModeEdit 
                    className="edit-device-logo logo mx-2 bg-transparent" 
                    // onClick = {() => 
                    //   {
                    //     handleShowEdit()
                    //   }
                    // }
                  />  
                  <BsTrash3Fill 
                    className="delete-device-logo logo" 
                    // onClick = {() => 
                    //   {
                    //     handleShowDelete()
                    //     // setId(dispositivo.iddispositivo)
                    //   } 
                    // }
                  /> 
                </div>
              </div>
            </div>
          )}
        </div>
        <IoMdAddCircle className="add-button" 
        // onClick={ () => handleShow()}
        />
      </section>
      {/* <CreateDevice fullscreen={fullscreen} show={show} setShow={setShow}/>
      <AdminEditDevice fullscreen={fullscreen} show={showEdit} setShow={setShowEdit}/>
      <ConfirmDeleteDevice fullscreen={fullscreen} show={showDelete} setShow={setShowDelete}/> */}
    </div>
  )
}

export { UserMainHome }


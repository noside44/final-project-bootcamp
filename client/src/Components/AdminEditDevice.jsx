import { useState, useEffect } from 'react'
import { app_devices, data } from './data'
import '../Styles/AdminEditUser.css'
import { Modal } from 'react-bootstrap'
import { IoIosCloseCircle } from "react-icons/io";
import {useForm} from "react-hook-form";
import { editDevices, getDevice } from '../api/dispositivosapi';

function AdminEditDevice( {show, fullscreen, setShow, handleShow, id} ){

  // const [updateDevice, setUpdateDevice] = useState("")
  // const [updateReference, setUpdateReference] = useState("")
  const {register, handleSubmit, setValue} = useForm()

  const onSubmit = handleSubmit( async(data) => {
    const res = await editDevices(id, data)
    setShow(false)
    window.location.reload()

  })

  useEffect(() => {
    if(id){
      async function loadDevice(){
        const res = await getDevice(id)
        setValue('iddispositivo', res.data.iddispositivo)
        setValue('nombredispositivo', res.data.nombredispositivo)
        setValue('referenciadispositivo', res.data.referenciadispositivo)
        // console.log({res}, id)
      }
      loadDevice()
    }
  },[id])

  return(
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}
      className="edituser-container d-flex flex-column align-items-center">
      <form 
        className="edituser-info d-flex flex-column col-lg-8 mx-auto"
        onSubmit = {onSubmit}
      >
        <IoIosCloseCircle 
            className="icon-close ms-3 d-flex flex-row align-self-end bg-transparent"
            onClick={() => setShow(false)}
        />
        <label className='label mb-1'>Nombre del dispositivo:</label>
        <input 
          className="edituser-input mb-4 ps-1" 
          type="text" placeholder="Nombre del dispositivo" 
          {...register("nombredispositivo")}
        />
        <label className='label mb-1'>Referencia del dispositivo:</label>
        <input 
          className="edit-input ps-1" 
          type="text" 
          placeholder="Referencia del dispositivo"
          {...register("referenciadispositivo")}
        />
        <button className="update-user-btn mt-5 mb-3 mx-auto text-primary">
          Actualizar
        </button>
      </form>
    </Modal>
  )
}

export { AdminEditDevice }
import { NavComponent } from "./NavComponent"
import { AdminMainHome } from "./AdminMainHome"
import { UserMainHome } from "./UserMainHome"
import { useContext, useState, useEffect } from "react"
import { UserContext } from "../Context/User/UserContext"
import { getUsuarioRol } from "../api/usuario_rol"

function Home(){

  const [rol, setRol] = useState("")

  // console.log({selectedUser})
 
  const id = sessionStorage.getItem("loggedUser")

  useEffect( () => {
    async function getRol() {
      const res = await getUsuarioRol(id)
      setRol(res.data)
    }
    getRol()
  }, [id])

  return(
    <div>
      <NavComponent/>
      {rol.rol_idrol === 1 ? <AdminMainHome /> : <UserMainHome />}
    </div>
  )
}

export { Home }
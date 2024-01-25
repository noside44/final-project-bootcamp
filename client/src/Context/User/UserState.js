import axios from "axios"
import { useReducer } from "react"
import { UserReducer } from "./UserReducer"
import { UserContext } from "./UserContext"
// import { getUsuarios, getUsuario } from "../../api/usuarios.api"
import { GET_USERS, GET_PROFILE, PUT_PROFILE } from "../types"

function UserState({ children }) {
  // Estado inicial de la aplicación
  const initialState = {
    users: [],
    selectedUser: null,
    datas: {},
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  async function getUsuarios(){
    const res = await axios.get('http://localhost:8000/usuario/api/usuario/')
    console.log(res.data)
    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  }

  async function getUsuario(id){
    const res = await axios.get(`http://localhost:8000/usuario/api/usuario/${id}/`)
    console.log(res.data)
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  }

  async function putUsuario(data){
    const res = await axios.put(`http://localhost:8000/usuario/api/usuario/`, data)
    console.log(res)
    dispatch({
      type: PUT_PROFILE,
      payload: {res}
    })
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users, 
        selectedUser: state.selectedUser,
        datas: state.datas,
        getUsuarios,
        getUsuario,
        putUsuario
      }}> 
      {children}
    </UserContext.Provider>
  )
}

export { UserState }
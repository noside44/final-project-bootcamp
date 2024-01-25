import "../Styles/Login.css"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { UserContext } from "../Context/User/UserContext"


function Login() {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [errorInput, setErrorInput] = useState(false)
  const [errorPass, setErrorPass] = useState(false)
  const navigate = useNavigate()

  const{ getUsuarios, users, getUsuario } = useContext(UserContext)

  useEffect(() => {
    getUsuarios();
  }, [])

  const res = users

  const handleSubmit = (event) => {
    event.preventDefault()
    if (userName === "" || password === "") {
      setErrorInput(true)
    }
    else if(userName.length > 0){
      const userData = res.find(item => item.emailusuario === userName)
      if(!(res.find(item => item.emailusuario === userName))){
        setErrorPass(true)
        setErrorInput(false)
      }
      else if(userName === userData.emailusuario && userData.contrasenausuario === password){
        sessionStorage.setItem('loggedUser', userData.idusuario)
        navigate("/Home")
      }
    }  
  }

  return (
    <div className="login-container d-flex flex-column m-auto w-50 text-light">
      <h1>
        Bienvenido a Parce
      </h1>
      <span className="app-icon m-auto mb-5"></span>
      <p className="text-start text-light login-text mb-3">
        Inicie sesión para cargar sus preferencias personales:
      </p>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <input
          className="ps-2 mb-3 login-input"
          type="email"
          placeholder="Correo Electrónico"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <input
          className="ps-2 mb-3 login-input"
          id="name"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button
          className="login-btn rounded-pill mt-5 m-auto"
        >
          Iniciar Sesión
        </button>
      </form>
      {errorInput && <p className="mt-5 error-text">Debe llenar todos los campos</p>}
      {errorPass && <p className="mt-5 error-text">Su usuario o contraseña son incorrectos</p>}
    </div>
  )
}

export { Login }
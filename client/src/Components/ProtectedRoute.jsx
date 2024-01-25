import { Navigate, Outlet } from "react-router-dom"

const[user, setUser] = ("")

const id = sessionStorage.getItem("loggedUser")


function ProtectedRoutes({ children, redirectTo="/"}){
    if(!id){
        return <Navigate to={redirectTo}/>
    }
    return <Outlet/>
}

export { ProtectedRoutes }
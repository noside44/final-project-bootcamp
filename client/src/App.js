import { useState } from 'react';
import { Menu } from './Components/Menu';
import { UpdateMyProfile } from './Components/UpdateMyProfile'
import { EditMyProfile } from './Components/EditMyProfile';
import { UserList } from './Components/UserList';
import { DeviceList } from './Components/DeviceList';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { RolList } from './Components/RolList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserState } from './Context/User/UserState';
import { ProtectedRoutes } from './Components/ProtectedRoute';
import { Footer } from './Components/Footer';
import './App.css';

const id = sessionStorage.getItem("loggedUser")
if(id){
  const user = true
}

function App( ) {

  const [userData, setUserData] = useState([])

  return (
    <div class="main d-flex align-items-between justify-content-between flex-column">
    <UserState>
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/> } />
          {/* userData={userData} */}
          <Route element={<ProtectedRoutes/>}>
            <Route path='/Home' element={<Home />}/>
            <Route path='Menu' element={<Menu /> }/>
            <Route path='UpdateMyProfile' element={<UpdateMyProfile /> }/>
            <Route path='EditMyProfile' element={<EditMyProfile /> }/>
            <Route path='UserList' element={<UserList /> }/>
            <Route path='DeviceList' element={<DeviceList /> }/>
            <Route path='RolList' element={<RolList /> }/>          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </UserState>

    <Footer class="mt-auto"/>
    </div>


    
  )
}

export default App;

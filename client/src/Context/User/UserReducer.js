/* eslint-disable import/no-anonymous-default-export */
import { GET_PROFILE, GET_USERS, PUT_PROFILE } from "../types";

// Definir que van a hacer los types
function UserReducer(state, action) {
  // payload son los datos que estamos pasando
  const { payload, type } = action

  switch(type){
    case GET_USERS:
      return {
        ...state,
        users: payload,
      }
    case GET_PROFILE:
      return{
        ...state,
        selectedUser: payload
      }
    case PUT_PROFILE:
      return{
        ...state,
        datas: payload
      }
    default:
      return state
  }
}

export { UserReducer }

// 33:53
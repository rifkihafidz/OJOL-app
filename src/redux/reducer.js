import { combineReducers } from "@reduxjs/toolkit"

const initialStateRegister = {
  name: 'Register'
}

const RegisterReducer = (state = initialStateRegister, action) => {
  return state
}

const initialStateLogin = {
  name: 'Login'
}

const LoginReducer = (state = initialStateLogin, action) => {
  return state
}

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer
})

export default reducer
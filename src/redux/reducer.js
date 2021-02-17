import { combineReducers } from "@reduxjs/toolkit"

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: ''
  },
  name: 'Register'
}

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      name: 'Berubah'
    }
  }
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue
      }
    }
  }
  return state
}

const initialStateLogin = {
  form: {
    email: '',
    password: ''
  },
  name: 'Login'
}

const LoginReducer = (state = initialStateLogin, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue
      }
    }
  }
  return state
}

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer
})

export default reducer
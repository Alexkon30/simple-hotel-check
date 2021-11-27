const defaultState = {
  login: '',
  password: '',
  isAuth: false
}

export const SET_LOGIN = 'SET_LOGIN'
export const SET_PASS = 'SET_PASS'
export const SET_AUTH = 'SET_AUTH'

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.payload }

    case SET_PASS:
      return { ...state, password: action.payload }

    case SET_AUTH:
      if (action.payload === false) localStorage.clear()
      return { ...state, isAuth: action.payload }

    default:
      return state
  }
}

export const setLoginAction = (payload) => ({ type: SET_LOGIN, payload })
export const setPassAction = (payload) => ({ type: SET_PASS, payload })
export const setAuthAction = (payload) => ({ type: SET_AUTH, payload })


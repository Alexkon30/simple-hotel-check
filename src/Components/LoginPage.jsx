import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// eslint-disable-next-line
import { setLoginAction, setPassAction, setAuthAction } from '../store/loginReducer'

const LoginPage = () => {
  const dispatch = useDispatch()
  const login = useSelector(state => state.loginState.login)
  const password = useSelector(state => state.loginState.password)

  const setLogin = (newLogin) => {
    dispatch(setLoginAction(newLogin))
  }

  const setPass = (newPass) => {
    dispatch(setPassAction(newPass))
  }

  return (
    <div className="container">
      <div className="background">
        <div className="blur">
          <div className='login__form form '>
            <div className="form__header">
              <p>
                Simple Hotel Check
              </p>
            </div>
            <div className="form__body">
              <p className='form__field'>Логин</p>
              <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
              <p className='form__field'>Пароль</p>
              <input type="password" value={password} onChange={(e) => setPass(e.target.value)} />
            </div>
            <div className="form__footer">
              <input type="button" value="Войти" onClick={() => {
                console.log(login, password)
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

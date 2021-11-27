import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAuthAction } from '../store/loginReducer'

// regexp = /^[a-z\s]+$/i;

// const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// return re.test(e.target.value.toLowerCase());

const LoginPage = () => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  const [password, setPass] = useState('')
  const [isValidLogin, setIsValidLogin] = useState(true)
  const [isValidPass, setIdValidPass] = useState(true)

  const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regPass = /^[a-z]{8,}$/i


  useEffect(checkAuth,
    // eslint-disable-next-line
    [])

  function checkAuth(login = localStorage.getItem('login'), password = localStorage.getItem('password')) {

    if (regEmail.test(login) && regPass.test(password)) {
      localStorage.setItem('login', login)
      localStorage.setItem('password', password)
      dispatch(setAuthAction(true))
    }
  }


  function checkValid(login, password) {
    regEmail.test(login) ? setIsValidLogin(true) : setIsValidLogin(false)
    regPass.test(password) ? setIdValidPass(true) : setIdValidPass(false)

    checkAuth(login, password)
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
              <div className={`form__field ${isValidLogin ? 'valid' : 'invalid'}`}>
                <p>Логин</p>
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
                {!isValidLogin ? <p>Please enter a valid email address</p> : <></>}
              </div>
              <div className={`form__field ${isValidPass ? 'valid' : 'invalid'}`}>
                <p>Пароль</p>
                <input type="password" value={password} onChange={(e) => setPass(e.target.value)} />
                {!isValidPass ? <p>Password length must be at least 8 characters and include Latin characters</p> : <></>}
              </div>
            </div>
            <div className="form__footer">
              <input type="button" value="Войти" onClick={() => checkValid(login, password)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

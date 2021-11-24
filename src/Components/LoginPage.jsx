import React from 'react'

const LoginPage = () => {
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
              <input type="text" />
              <p className='form__field'>Пароль</p>
              <input type="text" />
            </div>
            <div className="form__footer">
              <input type="button" value="Войти" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

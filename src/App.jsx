import React from 'react'
import LoginPage from './Components/LoginPage'
import BookingPage from './Components/BookingPage'
import './styles/App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'




function App() {
  const isAuth = useSelector(state => state.loginState.isAuth)

  return (
    <div className="App">
      <Router>
        <Switch>
          {!isAuth
            ? <>
              < Route path="/login" component={LoginPage} />
              <Redirect to="/login" />
            </>
            : <>
              <Route path='/booking' component={BookingPage} />
              <Redirect to="/booking" />
            </>}

        </Switch>
      </Router>
    </div>
  );
}

export default App;

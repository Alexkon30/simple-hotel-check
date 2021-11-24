import React from 'react'
import LoginPage from './Components/LoginPage'
import BookingPage from './Components/BookingPage'
import './styles/App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path='/booking' component={BookingPage} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

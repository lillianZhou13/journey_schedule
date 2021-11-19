import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
//components
import Home from './pages/home/Home'
import Lists from './pages/lists/Lists.js'
import Login from './pages/login/Login.js'
import Navbar from './components/Navbar.js'
import Signup from './pages/signup/Signup.js'
import Costs from './pages/costs/Costs.js'

import './App.css'
import Footer from './components/Footer'

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App container-fluid">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/home">
              {user && <Home />}
              {!user && <Redirect to="./login" />}
            </Route>
            <Route exact path="/lists">
              {user && <Lists />}
              {!user && <Redirect to="./login" />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/lists" />}
              {!user && <Login />}
            </Route>
            <Route exact path="/signup">
              {user && <Redirect to="/home" />}
              {!user && <Signup />}
            </Route>
            <Route exact path="/costs">
              {user && <Costs />}
              {!user && <Signup />}
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  )
}

export default hot(App)

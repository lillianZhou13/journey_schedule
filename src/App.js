import { BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
//components
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.js'
import Navbar from './components/Navbar.js';
import Signup from './pages/signup/Signup.js';



import './App.css';


function App() {
  const {authIsReady,user} = useAuthContext();
  return (
    <div className="App container">
      {authIsReady &&
      <BrowserRouter>
      <Navbar/>
       <Switch>
        <Route exact path="/home">
          {user && <Home />}
          {!user && <Redirect to="./login"/>}
        </Route>
        <Route path="/login">
          {user && <Redirect to="/home" />}
          {!user && <Login />}
        </Route>
        <Route exact path="/signup">
          {user && <Redirect to="/home" />}
          {!user && <Signup />}
        </Route>
     </Switch>
     
    
     </BrowserRouter>
    }
    </div>
  );
}

export default App;

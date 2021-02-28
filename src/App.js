import './App.css';
import React from "react";
import { BrowserRouter as Router,
         Switch,
         Route, 
         Redirect} from "react-router-dom";
import { Login } from './components/login/Login';
import { MainView } from './components/MainView';


function App() {

  const loginStatus = JSON.parse( localStorage.getItem("signedIn") );
  const signedIn = loginStatus === null ? false: loginStatus;
  
  console.log(signedIn);

  return (
      <Router>
            <Switch>
                <Route exact path="/" render={ () => (
                  !signedIn ? <Login/>
                           : <Redirect to={{pathname:"/planner"}}/>
                  )}
                />
                <Route exact path="/planner" render={ () => (
                  signedIn ? <MainView/>
                           : <Redirect to={{pathname:'/'}}/>
                  )}
                />
            </Switch>
      </Router>
  );
}

export default App;

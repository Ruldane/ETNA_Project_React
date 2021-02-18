import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import UpdateProject from "./components/Project/UpdateProject";
import { Provider } from "react-redux";
import store from "./store";
import ProjectBoard from "./components/projectBoard/ProjectBoard";
import AddProjectTask from "./components/projectBoard/ProjectTasks/AddProjectTask";
import UpdateTaskProject from "./components/projectBoard/ProjectTasks/UpdateTaskProject";
import StartPage from "./components/Layout/StartPage";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import jwtDecode from "jwt-decode";
import setJWTToken from "./SecurityUtility/setJWTToken";
import {SET_CURRENT_USER} from "./actions/types";
import {logout} from "./actions/secureActions";
import SecurisationRoute from "./SecurityUtility/SecurisationRoute";

// localstorage in securteActions.js
const JWTToken = localStorage.jwtTokens;
// give token to all the application
if (JWTToken){
    setJWTToken(JWTToken)
    const decode_jtwToken = jwtDecode(JWTToken);
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decode_jtwToken
    })

    // token valid in time
    const currentTime = Date.now()/1000;
    if (decode_jtwToken.exp < currentTime) {
       store.dispatch(logout())
        window.location.href="/";
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header />
                        {
                            // public routes
                        }
                        <Route exact path="/" component={StartPage} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        {
                            // private route
                        }

                        <Switch>
                            <SecurisationRoute exact path="/dashboard" component={Dashboard} />
                            <SecurisationRoute exact path="/addProject" component={AddProject} />
                            <SecurisationRoute exact path="/updateProject/:id" component={UpdateProject} />
                            <SecurisationRoute exact path="/projectBoard/:id" component={ProjectBoard}/>
                            <SecurisationRoute exact path="/addProjectTask/:id" component={AddProjectTask}/>
                            <SecurisationRoute exact  path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateTaskProject} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

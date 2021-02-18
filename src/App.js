import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import UpdateProject from "./components/Project/UpdateProject";
import { Provider } from "react-redux";
import store from "./store";
import ProjectBoard from "./components/projectBoard/ProjectBoard";
import AddProjectTask from "./components/projectBoard/ProjectTasks/AddProjectTask";
import UpdateTaskProject from "./components/projectBoard/ProjectTasks/UpdateTaskProject";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import jwtDecode from "jwt-decode";
import setJWTToken from "./SecurityUtility/setJWTToken";
import {SET_CURRENT_USER} from "./actions/types";
import {logout} from "./actions/secureActions";

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
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        {
                            // private route
                        }

                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/addProject" component={AddProject} />
                        <Route exact path="/updateProject/:id" component={UpdateProject} />
                        <Route exact path="/projectBoard/:id" component={ProjectBoard}/>
                        <Route exact path="/addProjectTask/:id" component={AddProjectTask}/>
                        <Route exact  path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateTaskProject} />

                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

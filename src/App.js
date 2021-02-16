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

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header />
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

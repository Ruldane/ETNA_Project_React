import React, { Component } from "react";
import {Link} from "react-router-dom";

class ProjectTask extends Component {
    render() {

        let priorityString;
        let priorityClass;

        const { project_task } = this.props;

        if (project_task.priority === 1) {
            priorityClass = "bg-danger text-light";
            priorityString = " URGENTE";
        }

        if (project_task.priority === 2) {
            priorityClass = "bg-warning text-light";
            priorityString = " IMPORTANTE";
        }

        if (project_task.priority === 3) {
            priorityClass = "bg-info text-light";
            priorityString = " BASSE";
        }

        return (
            <div className="card mb-1 bg-light">
                <div className={`card - header text-primary ${priorityClass}`}>
                     ID: {project_task.projectSequence} -- Priorité:{priorityString}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{project_task.summary}</h5>
                    <p className="card-text text-truncate ">
                        {project_task.acceptanceCriteria}
                    </p>
                    <Link to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`} className="btn btn-primary">
                        Voir ou mettre à jour
                    </Link>
                    <button className="btn btn-danger ml-4">Supprimer</button>
                </div>
            </div>
        );
    }
}
export default ProjectTask;
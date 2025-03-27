import { useState } from "react";
import ProjectForm from "./ProjectForm";
import "../styles/Projects.css"

export default function Projects() {
    const [projects, setProjects] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false);
    
    const handleProjectForm = () => {
        setShowProjectForm(true);
    }

    return (
        <div className="allprojects-container">
            <div className="projects-container">
                <h3>Projects</h3>
                {projects && projects.map((project)=> {
                    return (
                        // Key needs to be updated to UUID
                        <div className="display-project" key={project.name}>
                            <div className="project-info">
                                <div className="row">
                                    <p><b>{project.name},</b> <i>{project.role}</i></p>
                                    <p className="date"><i>start - end</i></p>
                                </div>
                                <div className="project-desc">
                                    <ul>
                                        {project.description &&
                                            // Press enter after each sentence to create a new bullet
                                            project.description.split("\n").map((line, index) =>
                                                line.trim() ? <li key={index}>{line.trim()}</li> : null
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="edit-btn-container">
                                <button type="submit" className="btn edit-btn">Edit</button> 
                            </div>
                        </div>
                    )
                })}
                {showProjectForm && <ProjectForm setProjects={setProjects} setShowProjectForm={setShowProjectForm} />}
            </div>
            <div className="add-btn-container">
                <button type="submit" className="btn add-btn" onClick={handleProjectForm}>Add</button>
            </div>
        </div>
    )
}
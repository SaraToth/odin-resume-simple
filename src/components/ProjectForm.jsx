import { useState } from "react";

export default function ProjectForm({setProjects, setShowProjectForm, }) {
    
    const [project, setProject] = useState(
        {
            name: "",
            role: "",
            startDate: "",
            endDate: "",
            description: "",
        }
    )

    const handleChange = (e) => {
        const newFormData = {
            ...project,
            [e.target.name]: e.target.value,
        }
        setProject(newFormData);
    }

    const submitProject = (e) => {
        e.preventDefault();
        const newFormData = {
            ...project,
            [e.target.name]: e.target.value,
        }
        setProject(newFormData);
        console.log(JSON.stringify(newFormData));

        setProjects((prevProjects) => [...prevProjects, project]);
        setShowProjectForm(false);
    }


    return(
            <form className="form-project" onSubmit={submitProject}>
                <div className="form">
                <div className="form-row">
                    <div className="form-item">
                        <label htmlFor="name">Project Name:</label>
                        <input type="text" id="name" name="name" value={project.name} onChange={handleChange} required></input>
                    </div>

                    <div className="form-item">
                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" name="role" value={project.role} onChange={handleChange} required></input>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-item">
                        <label htmlFor="start">Start Date:</label>
                        <input type="date" id="start" name="startDate" value={project.startDate} onChange={handleChange} required></input>
                    </div>
                    <div className="form-item">
                        <label htmlFor="end">End Date:</label>
                        <input type="date" id="end" name="endDate" value={project.endDate} onChange={handleChange} required></input>
                    </div>
                </div>
                
                <div className="form-row" id="project-desc">
                <textarea name="description" id="description" value={project.description} onChange={handleChange} required placeholder="Type your project description here, press enter to indicate a new bullet point"></textarea>
                </div>
            
                <div className="submit-btn-container">
                    <button type="submit" className="btn submit-btn">Submit</button>
                </div>
                </div>
            </form>
    )
}
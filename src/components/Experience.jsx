import { useState } from "react"
import Job from "./Job"
import "../styles/Experience.css"

export default function Experience() {
    const [jobs, setJobs] = useState([])
    const [showJobForm, setShowJobForm] = useState(false);
    
    const handleJobForm = () => {
        setShowJobForm(true);
    }

    return(
        <div className="experience-container">
            <div className="jobs-container">
                <h2>Professional Experience</h2>
                {jobs && jobs.map((job)=> 
                    {   
                        return(
                            // Key needs to be updated to UUID
                            <div className="display-job" key={job.title}>
                                <div>
                                    <h3>{job.title} at {job.company}</h3>
                                    <p className="date"><i>{job.startDate} - {job.endDate}</i></p>
                                    <p className="job-desc">{job.description}</p>
                                </div>
                                <button type="submit" className="btn edit-btn">Edit</button> 
                            </div>
                        )
                    }
                    )}
                {showJobForm && <Job setJobs={setJobs} setShowJobForm={setShowJobForm} />}
            </div>
            <div className="add-btn-container">
                <button type="submit" className="btn add-btn" onClick={handleJobForm}>Add</button>
            </div>
        </div>
    )

}
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
        <div className="form-container-experience">
            <div className="jobs">
            <h2>Professional Experience</h2>
            {jobs && jobs.map((job)=> 
                {   
                    return(
                        // Key needs to be updated to UUID
                        <div className="job item-container-job" key={job.title}> 
                            <h3>{job.title} at {job.company}</h3>
                            <p className="date"><i>{job.startDate} - {job.endDate}</i></p>
                            <p className="job-desc">{job.description}</p>
                        </div>
                    )
                }
                )}
                {showJobForm && <Job setJobs={setJobs} setShowJobForm={setShowJobForm} />}
            </div>
            <div className="btns">
            <button type="submit" className="add-btn" onClick={handleJobForm}>Add</button>
            </div>
        </div>
    )

}
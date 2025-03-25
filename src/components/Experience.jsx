import { useState } from "react"
import Job from "./Job"

export default function Experience() {
    const [jobs, setJobs] = useState([])
    const [showJobForm, setShowJobForm] = useState(false);
    
    const handleJobForm = () => {
        setShowJobForm(true);
    }

    return(
        <div className="form-container-experience">
            <h1>Work Experience</h1>
            <div>
                
            {jobs && jobs.map((job)=> 
                {   
                    return(
                        // Key needs to be updated to UUID
                        <div className="job item-container-job" key={job.title}> 
                            <h2>{job.title} at {job.company}</h2>
                            <p>{job.startDate} - {job.endDate}</p>
                            <p>{job.description}</p>
                        </div>
                    )
                }
                )}
            </div>
            {showJobForm && <Job setJobs={setJobs} setShowJobForm={setShowJobForm} />}
            <button type="submit" className="add-btn" onClick={handleJobForm}>Add</button>
        </div>
    )

}
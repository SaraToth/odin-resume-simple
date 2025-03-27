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
                <h3>Professional Experience</h3>
                {jobs && jobs.map((job)=> 
                    {   
                        return(
                            // Key needs to be updated to UUID
                            <div className="display-job" key={job.title}>
                                <div className="job-info">
                                    <div className="row">
                                        <p><b>{job.title},</b> <i>{job.company}</i></p>
                                        <p className="date"><i>{job.startDate} - {job.endDate}</i></p>
                                    </div>
                                    <p className="job-desc">
                                    <ul>
                                        {job.description &&
                                            // Press enter after each sentence to create a new bullet
                                            job.description.split("\n").map((line, index) =>
                                                line.trim() ? <li key={index}>{line.trim()}</li> : null
                                        )}
                                    </ul>
                                        </p>
                                        {/* {job.description}</p> */}
                                </div>
                                <div className="edit-btn-container">
                                    <button type="submit" className="btn edit-btn">Edit</button> 
                                </div>
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
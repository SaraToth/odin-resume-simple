import { useState } from "react";
import "../styles/Job.css"

export default function Job({setJobs, setShowJobForm, }) {
    
    const [job, setJob] = useState(
        {
            title: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
        }
    )

    const handleChange = (e) => {
        const newFormData = {
            ...job,
            [e.target.name]: e.target.value,
        }
        setJob(newFormData);
    }

    const submitJob = (e) => {
        e.preventDefault();
        const newFormData = {
            ...job,
            [e.target.name]: e.target.value,
        }
        setJob(newFormData);
        console.log(JSON.stringify(newFormData));

        setJobs((prevJobs) => [...prevJobs, job]);
        setShowJobForm(false);
    }


    return(
        <div className="form-container-job">
            <form onSubmit={submitJob}>
            <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={job.title} onChange={handleChange} required></input>

                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" value={job.company} onChange={handleChange} required></input>

                <label htmlFor="start">Start Date:</label>
                <input type="date" id="start" name="startDate" value={job.startDate} onChange={handleChange} required></input>

                <label htmlFor="end">End Date:</label>
                <input type="date" id="end" name="endDate" value={job.endDate} onChange={handleChange} required></input>
                
                <textarea name="description" id="description" value={job.description} onChange={handleChange} required placeholder="Type your job description here"></textarea>
                <div className="submit-btns">
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
    )
}
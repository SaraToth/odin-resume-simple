import { useState } from "react";

export default function Summary() {
    const [summary, setSummary] = useState(
        {
            summary: "",
        }
    )

    const handleChange = (e) => {
        const newFormData = {
            ...summary,
            [e.target.name]: e.target.value,
        }
        setSummary(newFormData);
    }


    const submitSummary = (e) => {
        e.preventDefault();
        const newFormData = {
            ...summary,
            [e.target.name]: e.target.value,
        }

        setSummary(newFormData);
        console.log(JSON.stringify(summary));
    }

    return(
        <div className="form-container-summary">
            <form onSubmit={submitSummary}>
            <h1>Career Summary</h1>
            <textarea name="summary" id="summary" value={summary.summary} onChange={handleChange} required placeholder="Type your professional summary"></textarea>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )

}


import { useState } from "react";

export default function SumForm({setSumInfo, setShowSumForm}) {
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

        setSumInfo(summary);
        setShowSumForm(false);
    }

    return(
        <div className="form-container-summary">
            <form onSubmit={submitSummary}>
            <div className="form-box-summary">
            <h2>Career Summary</h2>
            <textarea name="summary" id="summary" value={summary.summary} onChange={handleChange} required placeholder="Type your professional summary"></textarea>
            <button type="submit" className="btn submit-btn">Submit</button>
            </div>
            </form>
        </div>
    )
}
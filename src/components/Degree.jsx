import { useState } from "react";

export default function Degree({setDegrees, setShowDegreeForm }) {
    
    const [degree, setDegree] = useState(
        {
            degree: "",
            school: "",
            gradDate: "",
        }
    )

    const handleChange = (e) => {
        const newFormData = {
            ...degree,
            [e.target.name]: e.target.value,
        }
        setDegree(newFormData);
    }

    const submitDegree = (e) => {
        e.preventDefault();
        const newFormData = {
            ...degree,
            [e.target.name]: e.target.value,
        }
        setDegree(newFormData);
        console.log(JSON.stringify(newFormData));

        setDegrees((prevDegrees) => [...prevDegrees, degree]);
        setShowDegreeForm(false);
    }


    return(
            <form className="form-degree" onSubmit={submitDegree}>
                <div className="form">
                    <div className="form-row">
                        <div className="form-item">
                            <label htmlFor="degree">Degree</label>
                            <input type="text" id="degree" name="degree" value={degree.degree} onChange={handleChange} required></input>
                        </div>
                        <div className="form-item">
                            <label htmlFor="school">School</label>
                            <input type="text" id="school" name="school" value={degree.school} onChange={handleChange} required></input>
                        </div>
                    </div>
                    <div className="form-row grad-date">
                        <div className="form-item">
                            <label htmlFor="gradDate">Graduation Date</label>
                            <input type="date" id="gradDate" name="gradDate" value={degree.gradDate} onChange={handleChange} required></input>
                        </div>
                        <div className="form-item blank"></div>
                    </div>
                    <div className="submit-btn-container">
                    <button type="submit" className="btn submit-btn">Submit</button>
                </div>
                </div>
            </form>
    )
}
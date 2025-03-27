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
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" name="degree" value={degree.degree} onChange={handleChange} required></input>

                <label htmlFor="school">School</label>
                <input type="text" id="school" name="school" value={degree.school} onChange={handleChange} required></input>

                <label htmlFor="gradDate">Graduation Date</label>
                <input type="date" id="gradDate" name="gradDate" value={degree.gradDate} onChange={handleChange} required></input>
            
                <button type="submit" className="submit-btn">Submit</button>
            </form>
    )
}
import { useState } from "react";
import Degree from "./Degree";
import "../styles/Education.css"

export default function Education() {
    const [degrees, setDegrees] = useState([])
    const [showDegreeForm, setShowDegreeForm] = useState(false);

    const handleDegreeForm = () => {
        setShowDegreeForm(true);
    }
    return(
        <div className="education-container">
            <div className="degrees-container">
                <h2>Education</h2>
                {degrees && degrees.map((degree)=> {
                    return(
                        // Key needs to be updated to UUID
                        <div className="display-degree" key={degree.degree}>
                            <div>
                                <h3>{degree.degree}</h3>
                                <p>{degree.school} <i>{degree.gradDate}</i></p>
                            </div>
                            <button type="submit" className="edit-btn">Edit</button> 
                        </div>
                    )
                })}
                {showDegreeForm && <Degree setDegrees={setDegrees} setShowDegreeForm={setShowDegreeForm} />}
            </div>
            <div className="btns">
                <button type="submit" className="add-btn" onClick={handleDegreeForm}>Add</button>
            </div>
        </div>
    )

}

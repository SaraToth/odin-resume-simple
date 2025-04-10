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
                <h3>Education</h3>
                {degrees && degrees.map((degree)=> {
                    return(
                        // Key needs to be updated to UUID
                        <div className="display-degree" key={degree.degree}>
                            <div className="degree-info">
                            <div className="row">
                                <p><b>{degree.degree}</b></p>
                                <p><i>{degree.gradDate}</i></p>
                            </div>
                            <p>{degree.school}</p>
                            </div>
                            <button type="submit" className="btn edit-btn">Edit</button> 
                        </div>
                    )
                })}
                {showDegreeForm && <Degree setDegrees={setDegrees} setShowDegreeForm={setShowDegreeForm} />}
            </div>
            <div className="add-btn-container">
                <button type="submit" className="btn add-btn" onClick={handleDegreeForm}>Add</button>
            </div>
        </div>
    )

}

import { useState } from "react";
import Degree from "./Degree";

export default function Education() {
    const [degrees, setDegrees] = useState([])
    const [showDegreeForm, setShowDegreeForm] = useState(false);

    const handleDegreeForm = () => {
        setShowDegreeForm(true);
    }
    return(
        <div className="form-container-education">
            <h1>Education</h1>
            <div>
                {degrees && degrees.map((degree)=> {
                    return(
                        // Key needs to be updated to UUID
                        <div className="degree item-container-degree" key={degree.degree}>
                            <h2>{degree.degree}</h2>
                            <p>{degree.school} {degree.gradDate}</p>
                        </div>
                    )
                })}
            </div>
            {showDegreeForm && <Degree setDegrees={setDegrees} setShowDegreeForm={setShowDegreeForm} />}
            <button type="submit" className="add-btn" onClick={handleDegreeForm}>Add</button>
        </div>
    )

}

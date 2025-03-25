import { useState } from "react"
import "../styles/GenInfo.css"
import InfoForm from "./InfoForm";

export default function GenInfo() {
    const [genInfo, setGenInfo] = useState({})
    const [showGenInfoForm, setShowGenInfoForm] = useState(true);

    return (
        <div className="form-container-geninfo">
            <h2>Resume</h2>
            <div>
            {genInfo && 

                        // Key needs to be updated to UUID
                        <div className="info item-container-info" key={genInfo.title}> 
                            <h2>{genInfo.first} {genInfo.last}</h2>
                            <p>{genInfo.phone} {genInfo.email}</p>
                            <p>{genInfo.title}</p>
                        </div>
                }
            </div>
            {showGenInfoForm && <InfoForm setGenInfo={setGenInfo} setShowGenInfoForm={setShowGenInfoForm} />}
        </div>
    )
}
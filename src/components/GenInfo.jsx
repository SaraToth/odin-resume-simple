import { useState } from "react"
import "../styles/GenInfo.css"
import InfoForm from "./InfoForm";

export default function GenInfo() {
    const [genInfo, setGenInfo] = useState({})
    const [showGenInfoForm, setShowGenInfoForm] = useState(true);

    return (
        <div className="geninfo-container">
            <div className="infos-container">
                {Object.keys(genInfo).length > 0 && 

                    // Key needs to be updated to UUID
                    <div className="display-info" key={genInfo.title}> 
                        <div>
                            <h1>{genInfo.first} {genInfo.last}</h1>
                            <h2>{genInfo.title}</h2>
                            <p>{genInfo.phone}</p>
                            <p>{genInfo.email}</p>
                        </div>
                        <div className="edit-btn-container">
                            <button type="submit" className="btn edit-btn">Edit</button>
                        </div>
                    </div>
                }
                {showGenInfoForm && <InfoForm setGenInfo={setGenInfo} setShowGenInfoForm={setShowGenInfoForm} />}      
            </div>
        </div>
    )
}
import { useState } from "react"
import "../styles/GenInfo.css"
import InfoForm from "./InfoForm";

export default function GenInfo() {
    const [genInfo, setGenInfo] = useState({})
    const [showGenInfoForm, setShowGenInfoForm] = useState(true);

    return (
        <div className="form-container-geninfo">
            <div>
            {genInfo && 

                        // Key needs to be updated to UUID
                        <div className="info item-container-info" key={genInfo.title}> 
                            <h1>{genInfo.first} {genInfo.last}</h1>
                            <h3>{genInfo.title}</h3>
                            <p>{genInfo.phone} {genInfo.email}</p>
                        </div>
                }
            </div>

            {Object.keys(genInfo).length > 0 && 
                <div className="btns">
                    <button type="submit" className="edit-btn">Edit</button>
                </div>}
            
            {showGenInfoForm && <InfoForm setGenInfo={setGenInfo} setShowGenInfoForm={setShowGenInfoForm} />}
        </div>
    )
}
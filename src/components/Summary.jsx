import { useState } from "react";
import "../styles/Summary.css"
import SumForm from "./SumForm";

export default function Summary() {
    const [showSumForm, setShowSumForm] = useState(true);
    const [sumInfo, setSumInfo] = useState({})

    return(
        <div>
            <div>
                {sumInfo &&

                    // Key needs to be updated to UUID
                    <div className="sum item-container-sum" key={sumInfo.summary}> 
                    <p className="summary">{sumInfo.summary}</p>
                </div>
                }
            </div>
            {showSumForm && <SumForm setSumInfo={setSumInfo} setShowSumForm={setShowSumForm} />}
        </div>
    )

}


import { useState } from "react"
import "../styles/GenInfo.css"

export default function GenInfo() {
    const [genInfo, setGenInfo] = useState(
        {
            first: "",
            last: "",
            email: "",
            phone: "",
            title: "",
        },
    )
    
    const handleChange = (e) => {
        const newFormData = {
            ...genInfo,
            [e.target.name]: e.target.value,
        }
        setGenInfo(newFormData);
    }


    const submitGenInfo = (e) => {
        e.preventDefault();
        const newFormData = {
            ...genInfo,
            [e.target.name]: e.target.value,
        }

        setGenInfo(newFormData);
        console.log(JSON.stringify(genInfo));
    }

    return (
        <div className="form-container-geninfo">
            <form onSubmit={submitGenInfo}>
                <h1>General Information</h1>
                <div className="form-content">

                    <div className="form-row">
                        <div className="form-item">
                            <label htmlFor="first">First Name:</label>
                            <input type="text" id="first" name="first" value={genInfo.first} onChange={handleChange} required></input>
                        </div>

                        <div className="form-item">
                            <label htmlFor="last">Last Name:</label>
                            <input type="text" id="last" name="last" value={genInfo.last} onChange={handleChange} required></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-item">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={genInfo.email} onChange={handleChange} required></input>
                        </div>

                        <div className="form-item">
                            <label htmlFor="phone">Phone:</label>
                            <input type="phone" id="phone" name="phone" value={genInfo.phone} onChange={handleChange} required></input>
                        </div>
                    </div>


                    <div className="form-item">
                        <label htmlFor="title">Job Title:</label>
                        <input type="text" id="title" name="title" value={genInfo.title} onChange={handleChange} required></input>
                    </div>
                </div>
                <div className="form-btn">
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
    )
}
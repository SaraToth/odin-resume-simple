import { useState } from "react";


export default function InfoForm({setGenInfo, setShowGenInfoForm}) {
    const [info, setInfo] = useState(
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
            ...info,
            [e.target.name]: e.target.value,
        }
        setInfo(newFormData);
    }

    const submitInfo = (e) => {
        e.preventDefault();
        const newFormData = {
            ...info,
            [e.target.name]: e.target.value,
        }

        setInfo(newFormData);
        console.log(JSON.stringify(info));

        setGenInfo(info)
        setShowGenInfoForm(false)
    }

    return(
        <form className="form-info" onSubmit={submitInfo}>
            <h1>Resume</h1>
            <div className="form-content">
                <div className="form-content-container">
                    <div className="form-row">
                        <div className="form-item">
                            <label htmlFor="first">First Name:</label>
                            <input type="text" id="first" name="first" value={info.first} onChange={handleChange} required></input>
                        </div>

                        <div className="form-item">
                            <label htmlFor="last">Last Name:</label>
                            <input type="text" id="last" name="last" value={info.last} onChange={handleChange} required></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-item">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={info.email} onChange={handleChange} required></input>
                        </div>

                        <div className="form-item">
                            <label htmlFor="phone">Phone:</label>
                            <input type="phone" id="phone" name="phone" value={info.phone} onChange={handleChange} required></input>
                        </div>
                    </div>


                    <div className="form-item">
                        <label htmlFor="title">Job Title:</label>
                        <input type="text" id="title" name="title" value={info.title} onChange={handleChange} required></input>
                    </div>
                    <div className="submit-btn-container">
                        <button type="submit" className="btn submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
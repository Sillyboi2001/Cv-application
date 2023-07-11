import React, { useState } from "react";

const Info = () => {
    const [info, setInfo] = useState({
        username: '',
        location: '',
        phoneNo: '',
        email: '',
    })
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    return (
        <div id="info-section">
            <form>
                <div>
                    <input
                        type="text" 
                        id="username" 
                        placeholder="YOUR NAME"
                        name="username"
                        value={info.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        id="location" 
                        placeholder="LOCATION"
                        name="location"
                        value={info.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        id="phone" 
                        placeholder="PHONE NO" 
                        name="phoneNo"
                        value={info.phoneNo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        id="mail" 
                        placeholder="EMAIL ADDRESS"
                        name="email"
                        value={info.email}
                        onChange={handleChange}
                    />
                </div>           
            </form>
        </div>
    )
}
export default Info;

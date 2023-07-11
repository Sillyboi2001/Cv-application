import React, { useState } from "react";
import uniqid from 'uniqid';

const WorkInputForm = () => {
    const initialState = {
        jobTitle: '',
        company: '',
        dateWorked: '',
        location: '',
        description: '',
        id: uniqid()
    }
    const [workInfo, setWorkInfo] = useState(initialState)

    const resetState = () => {
        setWorkInfo(initialState)
    }

    const handleChange = (e) => {
        setWorkInfo((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    return (
        <form class="form-section">
            <div>
                <label for="job-title">Job Title</label><br />
                <input 
                    type="text" 
                    id="job-title"
                    name="jobTitle"
                    value={workInfo.jobTitle}
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label for="company">Company</label><br />
                <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={workInfo.company}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label for="date">Date Worked(MM/YYYY - MM/YYYY)</label><br />
                <input 
                    type="text" 
                    id="date"
                    name="dateWorked"
                    value={workInfo.dateWorked}
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label for="location">Location(e.g Los Angeles, CA)</label><br />
                <input 
                    type="text" 
                    id="location" 
                    name="location"
                    value={workInfo.location}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label for="description">Description</label><br />
                <textarea
                    id="description"
                    name="description"
                    value={workInfo.description}
                    onChange={handleChange} >
                </textarea>
            </div>
            <div id="action-buttons">
                <button type="button" id="save">Save</button>
                <button type="button" id="cancel">Cancel</button>
            </div>
        </form>
    )
}

export default WorkInputForm
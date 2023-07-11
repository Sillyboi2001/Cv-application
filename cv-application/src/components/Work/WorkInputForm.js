import React, { useState } from "react";
import uniqid from 'uniqid';

const WorkInputForm = (props) => {
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
    const handleSubmit = (e) => {
        e.preventDefault()
        props.savework(workInfo);
        resetState()
    }

    if(!props.displayForm) return null
    return (
        <>
            <form class="form-section" onSubmit={handleSubmit}>
            <div>
                <label for="job-title">Job Title</label>
                <input
                    type="text"
                    id="job-title"
                    name="jobTitle"
                    value={workInfo.jobTitle}
                    onChange={handleChange} />
            </div>
            <div>
                <label for="company">Company</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={workInfo.company}
                    onChange={handleChange} />
            </div>
            <div>
                <label for="date">Date Worked(MM/YYYY - MM/YYYY)</label>
                <input
                    type="text"
                    id="date"
                    name="dateWorked"
                    value={workInfo.dateWorked}
                    onChange={handleChange} />
            </div>
            <div>
                <label for="location">Location(e.g Los Angeles, CA)</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={workInfo.location}
                    onChange={handleChange} />
            </div>
            <div>
                <label for="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={workInfo.description}
                    onChange={handleChange}>
                </textarea>
            </div>
            <div id="action-buttons">
                <input type="submit" id="save" value="Save" />
                <button type="button" id="cancel" onClick={props.handleDisplay}>Cancel</button>
            </div>
        </form>
        </>
    )
}

export default WorkInputForm
import React, {useState} from "react";
import uniqid from 'uniqid';

const EducationInputForm = () => {
    const initialState = {
        school: '',
        degree: '',
        dateAttended: '',
        location: '',
        fieldOfStudy: '',
        id: uniqid()
    }
    const [eduInfo, setEduInfo] = useState(initialState)
    const [display, setDisplay] = useState(false)

    const resetState = () => {
        setEduInfo(initialState)
    }

    const handleChange = (e) => {
        setEduInfo((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const handleDisplay = () => {
        setDisplay(!display)
    }

    return(
        <>
        <div id="open-btn-container">
            <button 
                type="button" 
                onClick={handleDisplay}
            >+ Add Education</button>
        </div>
        {display && 
            <form class="form-section">
            <div>
                <label for="school">School</label>
                <input
                    type="text"
                    id="job-title"
                    name="school"
                    value={eduInfo.school}
                    onChange={handleChange} />
            </div>
            <div>
                <label for="degree">Degree</label>
                <input
                    type="text"
                    id="degree"
                    name="degree"
                    value={eduInfo.degree}
                    onChange={handleChange} />
            </div>
            <div>
                <label for="school-attended">Date Attended(MM/YYYY - MM/YYYY)</label>
                <input
                    type="text"
                    id="date"
                    name="dateAttended"
                    value={eduInfo.dateAttended}
                    onChange={handleChange} />
            </div>
            <div>
                <label for="location">Location(e.g Los Angeles, CA)</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={eduInfo.location}
                    onChange={handleChange} />
            </div>
            <div>
                <label for="study-field">Field of Study</label>
                <input
                    type="text"
                    id="study-field"
                    name="fieldOfStudy"
                    value={eduInfo.fieldOfStudy}
                    onChange={handleChange} />
            </div>
            <div id="action-buttons">
                <button type="button" id="save">Save</button>
                <button type="button" id="cancel" onClick={handleDisplay}>Cancel</button>
            </div>
        </form>}
        </>
    )
}

export default EducationInputForm
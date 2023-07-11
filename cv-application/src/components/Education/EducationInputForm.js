import React, {useState} from "react";
import uniqid from 'uniqid';

const EducationInputForm = (props) => {
    const initialState = {
        school: '',
        degree: '',
        dateAttended: '',
        location: '',
        fieldOfStudy: '',
        id: uniqid()
    }
    const [eduInfo, setEduInfo] = useState(initialState)

    const resetState = () => {
        setEduInfo(initialState)
    }

    const handleChange = (e) => {
        setEduInfo((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.saveEdu(eduInfo)
        resetState()
    }

    if(!props.displayForm) return null
    return(
        <>
            <form class="form-section" onSubmit={handleSubmit}>
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
                    <div className="select-container">
                        <select
                            name="degree"
                            id="degree-input"
                            onChange={handleChange}
                            value={eduInfo.degree}
                        >
                            <option>None</option>
                            <option>High school or equivalent</option>
                            <option>Associate</option>
                            <option>Bachelor's</option>
                            <option>Master's</option>
                            <option>Doctorate</option>
                            <option>Other</option>
                        </select>
                    </div>
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
                    <input type="submit" id="save" value="Save" />
                    <button type="button" id="cancel" onClick={props.handleDisplay}>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default EducationInputForm
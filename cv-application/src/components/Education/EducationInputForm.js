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

    const resetState = () => {
        setEduInfo(initialState)
    }

    const handleChange = (e) => {
        setEduInfo((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    return(
        <form class="form-section">
            <div>
                <label for="school">School</label><br />
                <input 
                    type="text" 
                    id="job-title"
                    name="school"
                    value={eduInfo.school}
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label for="degree">Degree</label><br />
                <input 
                    type="text" 
                    id="degree"
                    name="degree"
                    value={eduInfo.degree}
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label for="school-attended">Date Attended(MM/YYYY - MM/YYYY)</label><br />
                <input 
                    type="text" 
                    id="date"
                    name="dateAttended"
                    value={eduInfo.dateAttended}
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label for="location">Location(e.g Los Angeles, CA)</label><br />
                <input 
                    type="text" 
                    id="location" 
                    name="location"
                    value={eduInfo.location}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label for="study-field">Field of Study</label><br />
                <input 
                    type="text" 
                    id="study-field" 
                    name="fieldOfStudy"
                    value={eduInfo.fieldOfStudy}
                    onChange={handleChange}
                />
            </div>
            <div id="action-buttons">
                <button type="button" id="save">Save</button>
                <button type="button" id="cancel">Cancel</button>
            </div>
        </form>
    )
}

export default EducationInputForm
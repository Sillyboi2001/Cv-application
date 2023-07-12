import React from "react";
import { AiFillDelete } from 'react-icons/ai';

const SaveEduInfo = ({ eduList, deleteEdu }) => {
    return (
        <div id="display-info">
            <div id="delete-btn-container">
                <button id="delete-btn" onClick={() => deleteEdu(eduList.id)}>
                    <i><AiFillDelete /></i>
                </button>
            </div>
            <h3 id="main-title">{eduList.school}</h3>
            <p id="date-info">{eduList.dateAttended}</p>
            <p id="sub-info">{eduList.degree}</p>
            <p id="sub-info">{eduList.location}</p>
            <p id="sub-info">{eduList.fieldOfStudy}</p>
        </div>
    )
}

export default SaveEduInfo;
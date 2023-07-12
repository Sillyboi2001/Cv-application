import React from "react";
import { AiFillDelete } from 'react-icons/ai';

const SaveWorkInfo = ({ workList, deleteWork }) => {
    return (
        <div id="display-info">
            <div id="delete-btn-container">
                <button id="delete-btn" onClick={() => deleteWork(workList.id)}>
                    <i><AiFillDelete /></i>
                </button>
            </div>
            <h3 id="main-title">{workList.jobTitle}</h3>
            <p id="date-info">{workList.dateWorked}</p>
            <p id="sub-info">{workList.company}</p>
            <p id="sub-info">{workList.location}</p>
            <p id="sub-info">{workList.description}</p>
        </div>
    )
}

export default SaveWorkInfo;
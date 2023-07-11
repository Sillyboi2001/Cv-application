import React from "react";

const SaveEduInfo = (props) => {
    const { eduList } = props
    return (
        <div id="display-info">
            <h3 id="main-title">{eduList.school}</h3>
            <p id="date-info">{eduList.dateAttended}</p>
            <p id="sub-info">{eduList.degree}</p>
            <p id="sub-info">{eduList.location}</p>
            <p id="sub-info">{eduList.fieldOfStudy}</p>
        </div>
    )
}

export default SaveEduInfo;
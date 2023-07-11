import React from "react";

const SaveWorkInfo = (props) => {
    const { workList } = props
    return (
        <div id="display-info">
            <h3 id="main-title">{workList.jobTitle}</h3>
            <p id="date-info">{workList.dateWorked}</p>
            <p id="sub-info">{workList.company}</p>
            <p id="sub-info">{workList.location}</p>
            <p id="sub-info">{workList.description}</p>
        </div>
    )
}

export default SaveWorkInfo;
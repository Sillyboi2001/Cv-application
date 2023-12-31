import React, { useState } from "react";
import Heading from "../Heading/Heading";
import WorkInputForm from "./WorkInputForm";
import SaveWorkInfo from "./SaveWorkInfo";
import ModalBtn from "../Buttons/ModalBtn";

const Work = () => {
    const [workInfo, addWorkInfo] = useState([])
    const [display, setDisplay] = useState(false)

    const handleDisplay = () => {
        setDisplay(!display)
    }
    const SaveWork = (work) => {
        const workExperience = [...workInfo, work]
        addWorkInfo(workExperience)
        handleDisplay()
    }
    const deleteWork = (id) => {
        addWorkInfo(workInfo.filter(work => work.id !== id ))
    }
    return (
        <>
            <Heading 
                title="WORK EXPERIENCE" 
            />
            {workInfo.map((workList) => (
                <SaveWorkInfo
                    workList={workList}
                    key={workList.id}
                    deleteWork={deleteWork}
                />
            ))}
            <WorkInputForm 
                savework={SaveWork} 
                handleDisplay={handleDisplay} 
                displayForm={display}
            />
            <ModalBtn 
                title="Work Experience"
                handleDisplay={handleDisplay}
            />
        </>
    )
}
export default Work;

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
    return (
        <>
            <Heading 
                title="Work Experience" 
            />
            {workInfo.map((workList) => (
                <SaveWorkInfo
                    workList={workList}
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

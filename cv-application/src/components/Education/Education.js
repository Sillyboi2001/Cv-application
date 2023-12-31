import React, { useState } from "react";
import ModalBtn from "../Buttons/ModalBtn";
import Heading from "../Heading/Heading";
import EducationInputForm from "./EducationInputForm";
import SaveEduInfo from "./SaveEduInfo";

const Education = () => {
    const [display, setDisplay] = useState(false)
    const [eduInfo, addEduInfo] = useState([])

    const handleDisplay = () => {
        setDisplay(!display)
    }
    const SaveEdu = (edu) => {
        const education = [...eduInfo, edu]
        addEduInfo(education)
        handleDisplay()
    }
    const deleteTask = (id) => {
        addEduInfo(eduInfo.filter(edu => edu.id !== id))
    }
    return (
        <>
            <Heading title="EDUCATION" />
            {eduInfo.map((eduList) => (
                <SaveEduInfo 
                    eduList={eduList}
                    key={eduList.id}
                    deleteEdu={deleteTask}
                />
            ))}
            <EducationInputForm 
                saveEdu={SaveEdu} 
                displayForm={display} 
                handleDisplay={handleDisplay} 
            />
            <ModalBtn title="Education" handleDisplay={handleDisplay} />
        </>
    )
}

export default Education;

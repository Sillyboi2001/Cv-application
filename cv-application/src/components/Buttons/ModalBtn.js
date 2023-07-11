import React from "react";

const ModalBtn = (props) => {
    return (
        <div id="open-btn-container">
            <button type="button" onClick={props.handleDisplay}>+ Add {props.title}</button>
        </div>
    )
}

export default ModalBtn
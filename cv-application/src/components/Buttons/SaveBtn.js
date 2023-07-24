import React from "react";

const SaveBtn = () => {
    const handlePage = () => {
        //hide all buttons
        const buttons = document.getElementsByTagName('button')
        Array.from(buttons, (button) => button.style.display = 'none')

        //disale all input fields, hover effect annd cursor
        const inputs = document.getElementsByTagName('input')
        Array.from(inputs, (input) => {
            input.style.color = 'black'
            input.style.backgroundColor = 'white'
            input.style.cursor = 'default'
            input.disabled = true
            return input
        })
    }
    return (
        <button id="save-page-btn" onClick={handlePage}>SAVE CV</button>
    )
}

export default SaveBtn;

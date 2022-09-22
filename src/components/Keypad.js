import React, {useState} from "react";
// Code Keypad Component Here

function Keypad (){
    function handlePassword() {
        console.log("Entering password...")
    }
    return (
        <div>
            <label htmlFor="password">Password:</label>
            <input onChange={handlePassword} type="password" id="password"/>
        </div>
    )
}

export default Keypad;
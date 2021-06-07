import React from 'react'
import {useState} from "react"

export default function Usestate() {
    //let name="Mike";
    const [name,setName]=useState("Mike");
    
    function changeName(){
        const newName=name==="Mike" ? "Jane" : "Mike";
        setName(newName);
        
    }
    return (
        <div>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
            {/* 함수에서 처리함. */}
            <button onClick={()=>{
                setName(name==="Mike" ? "Jane" : "Mike")
            }}>Change2</button>
            {/* button안에서 처리함. */}
        </div>
    )
}

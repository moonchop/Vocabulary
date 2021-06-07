import React from 'react'
import {useState} from "react"
import Ex from "./Ex"
export default function Props({age}) {
    
    const [name,setName]=useState("Mike");
    const msg=age>19 ? "성인 입니다.":"미성년자 입니다."
    
    
    return (
        <div>
            <h2 id="name">{name}({age}):{msg}</h2> 
            <Ex name={name} />
            <button onClick={()=>{
                setName(name==="Mike" ? "Jane" : "Mike")
                
            }}>Change2</button>
        </div>
    )
}

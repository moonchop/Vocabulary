import React from 'react'
import dummy from "./data.json"
import{Link} from "react-router-dom"
export default function DayList() {
   
   console.log(dummy);
    return <ul className="list_day">
        {/*map(반복문)은 배열을 받아서 새로운 배열을 반환함.*/}
        {dummy.days.map((day)=>(
            <li key={day.id}>
                <Link to={`/day/${day.day}`}> Day{day.day}</Link>
               
            </li>
        ))}
        <li></li>
        </ul>;
}

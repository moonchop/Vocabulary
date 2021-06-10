import React from 'react'
import{Link} from "react-router-dom"
import {useState,useEffect} from 'react'
export default function DayList() {
   
    const [days,setDays]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3001/days")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setDays(data);
        });
    },[]);

    return <ul className="list_day">
        {/*map(반복문)은 배열을 받아서 새로운 배열을 반환함.*/}
        {days.map((day)=>(
            <li key={day.id}>
                <Link to={`/day/${day.day}`}> Day{day.day}</Link>
               
            </li>
        ))}
        <li></li>
        </ul>;
}

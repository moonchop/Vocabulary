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
    if(days.length===0){
        return <span>Loading...</span>;
    }

    return <ul className="list_day">
        {/*map(반복문)은 배열을 받아서 새로운 배열을 반환함.*/}
        {days.map((day)=>(
            <li key={day.id}> 
            {/* key가 필요한 이유는 값을 생성, 삭제할때 나머지 value 값의 위치를 알 수 있기 때문임.
            따라서 위의 경우 index를 쓰면 안됨.*/}
                <Link to={`/day/${day.day}`}> Day{day.day}</Link>
               
            </li>
        ))}
        <li></li>
        </ul>;
}

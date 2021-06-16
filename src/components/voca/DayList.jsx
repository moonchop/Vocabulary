import React from 'react'
import{Link} from "react-router-dom"
import {useState,useEffect} from 'react'
export default function DayList() {
   
    //const days=useFetch("http://localhost:3001/days")
    const [days,setDays]=useState([]);
    
    useEffect(()=>{
        //랜더링되고 api를 호출하기 위해 useEffect씀
        fetch("http://localhost:3001/days")
        .then(res=>{ //res는 http응답이고, 실제 json은 아님. 그래서 json 메소드를 사용해준다. 그럼 json으로 변환되어 반환함. 
            return res.json();
        })
        .then(data=>{ //data를 받아서 day 목록을 반환한다.
            setDays(data);
        });
    },[]);
    //[count]를 하면 count가 변경되었을때만 실행. 즉, 조건임(의존성 배열)
    //빈배열을 입력하면 한번만 실행된다.
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
               {/* Switch를 사용하여 Link로 렌더링. 콘솔에선 a태그로 연결된다. */}
            </li>
        ))}
        <li></li>
        </ul>;
}

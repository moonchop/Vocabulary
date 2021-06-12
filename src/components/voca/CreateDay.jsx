import React from 'react'
import useFetch from "../../hook/UseFetch"
import {useHistory} from "react-router";
export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();

    function addDay(){

        fetch(`http://localhost:3001/days/`,{
            method:"POST", //새로운 단어 생성
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({ //json문자열로 변환
                day:days.length+1
            }),
        })
        .then(res=>{
            if(res.ok){
                alert("생성 완료!")
                history.push(`/`);
            }
        });
    }
    
    
    
    return (
        <div>
            <h3>현재 일수: {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
            
        </div>
    )
}

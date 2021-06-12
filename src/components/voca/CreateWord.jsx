import React from 'react'
import useFetch from "../../hook/UseFetch"
import {useRef} from "react";
import {useHistory} from "react-router";
export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    //useRef는 dom에 접근할 수있게 해준다. 
   
    function onSubmit(e){
        e.preventDefault();

       
        fetch(`http://localhost:3001/words/`,{
                method:"POST", //새로운 단어 생성
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({ //json문자열로 변환
                    day:dayRef.current.value,
                    eng:engRef.current.value,
                    kor:korRef.current.value,
                    isDone:false
                }),
            })
            .then(res=>{
                if(res.ok){
                    alert("생성 완료!")
                    history.push(`day/${dayRef.current.value}`);
                }
            });
    }
 
    return (
        <form onSubmit={onSubmit}>
            <div className="input_area" > 
            {/* ref={engRef} 는 dom요소가 생성된 후 접근할 수 있다. */}
                <label>Eng</label>
                <input type="text" ref={engRef}/>
            </div>
            <div className="input_area" >
                <label>Kor</label>
                <input type="text" ref={korRef}/>
            </div>
            <div className="input_area" >
                <label>Day</label>
                <select ref={dayRef}t>
                    {days.map(day=>( 
                    <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                       
                    ))}
                </select>
            </div>
            <button>저장</button>

        </form>
    )
}

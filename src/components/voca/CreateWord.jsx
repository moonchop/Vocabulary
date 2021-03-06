import React from 'react'
import useFetch from "../../hook/UseFetch"
import {useRef,useState} from "react";
import {useHistory} from "react-router";
export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory(); 
    const [isLoading,setIsLoading]=useState(false)
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    //useRef는 dom에 접근할 수있게 해준다. (스크롤 위치확인 or 포커스를 줄 때)
   
    function onSubmit(e){
        e.preventDefault();

        if(!isLoading){
            setIsLoading(true);
            fetch(`http://localhost:3001/words/`,{
                    method:"POST", //새로운 단어 생성
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({ //json문자열로 변환
                         //current는 해당요소에 접근할수있고, value는 input에 입력된 값 얻음
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
                        //보내고 싶은 주소를 넣어주면 해당 페이지로 이동한다.(Link to와 비슷)
                        setIsLoading(false);
                    }
                });
        }
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
                <select ref={dayRef}>
                    {days.map(day=>( 
                    <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                       
                    ))}
                </select>
            </div>
            <button>{isLoading ? "Saving..." : "저장"}</button>

        </form>
    )
}

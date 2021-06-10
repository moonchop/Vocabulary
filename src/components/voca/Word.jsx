import React from 'react'
import {useState} from 'react'
export default function Word({word}) {
    const [isShow,setIsShow]= useState(false);
    const [isDone,setIsDone]= useState(word.isDone);
    function toggleShow(){
        setIsShow(!isShow);
    }
    function toggleDone()
    {
        //setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`,{
            method:"PUT",
            header:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({ //json문자열로 변환
                ...word, //기존데이터에
                isDone:!isDone, //isDone을 바꿔서 입력
            }),
        })
        .then(res=>{
            if(res.ok){
                setIsDone(!isDone)
            }
        });
    
          
    }
    return (
        <tr className={isDone ? 'off' : ' '}>
            <td>
                <input type="checkbox" onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow &&word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기': '보기'}</button>
                <button className="btn_del">삭제</button>
            </td>
    </tr>
    )
}



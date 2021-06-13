//특정 날짜를 클릭했을때, 단어가 나오는 page
import React from 'react'
import {useState} from 'react'
export default function Word(props) {
    const [word,setWord]= useState(props.word)
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
            headers:{
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
    function del(){
        if(window.confirm("삭제하시겠습니까?")){
        fetch(`http://localhost:3001/words/${word.id}`,{
            method:"DELETE",
        })
        .then(res=>{
            if(res.ok){
                setWord({id:0});
            }
        });
        }
    }
    if(word.id===0){
        return null;
    }
    return (
        <tr className={isDone ? "off" : " "}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow &&word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기': '보기'}</button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
    </tr>
    )
}


//json-server --watch ./src/components/voca/data.json --port 3001

//뜻 숨기기는 단어에만 해당(checkbox X, 버튼 X)하기 때문에 따로 component를 만들어줌.
import React from 'react'
import {useState} from 'react'
export default function Word(props) { //props={word}
    //Day.jsx의 word를 props로 받아옴.
    const [word,setWord]= useState(props.word)
    const [isShow,setIsShow]= useState(false); //false는 단어외움 유무를 알기 위함.
    //뜻 숨기기, 보이기를 위한 useState
    const [isDone,setIsDone]= useState(word.isDone);
    //check 표시 상태를 나타내기 위한 useState

    function toggleShow(){ //버튼을 눌렀을때, 보이기 숨기기 하는 함수.
        setIsShow(!isShow);
    }


    function toggleDone()
    {   //checkbox 유지하는 함수
        //setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`,{
            method:"PUT", 
            headers:{
                "Content-Type":"application/json",//보내는 리소스의 타입을 의미
            },
            //PUT은 body가 필요함. 정보를 넘겨줘야하기 때문.
            body:JSON.stringify({ //PUT 할 내용들을 json문자열로 변환해 body에  저장.
                ...word, //기존데이터에  //(word배열의 값을 꺼냄)
                isDone:!isDone, //isDone을 바꿔서 입력
            }),
        })
        .then(res=>{
            if(res.ok){ //then 후에 응답이 ok면 
                setIsDone(!isDone) //state바꿈.
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
            {/* isShow===true일때 kor 보여줌 */}
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기': '보기'}</button>
                {/* toggleShow(), setIsShow로 단어를 숨기기 보이기 할 수있음. */}
                <button onClick={del} className="btn_del">삭제</button>
            </td>
    </tr>
    )
}


//json-server --watch ./src/components/voca/data.json --port 3001

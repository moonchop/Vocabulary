//특정 날짜를 클릭했을때, 단어가 나오는 page
import {useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
// /:day에서 url에 포함된 값을 얻기 위함.
// =URL에 포함된 값을 얻을 땐 useParams
import Word from "./Word"

export default function Day(){
    const day=useParams().day; 
    //useParams.day는 App.js에서 선언한 day다. url에서 값(String)을 가져와 day에 맞는 page 노출한다.
    
    // const wordList = dummy.words.filter(word=> (
    //     word.day===Number(day)
    // ))
    const [word,setWords]= useState([]); //빈 배열
    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        //?day=1은 Day=1의 단어만 가져온다.
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setWords(data);
        });
    },[day]);
    //useEffect내부에서 ${day}같이 특정값을 사용하면 [day]넣어줘야함.
   
    //const words=useFetch(`http://localhost:3001/words?day=${day}`)
    //useFetch를 이용하면 위에 코드 필요없음
    return (
    <>
    <h2>Day {day}</h2>
    {word.length === 0 && <span>Loading...</span>}
    <table>
        <tbody>
            {word.map(word=>( //word를 반복해서 찍어줌.
               <Word word={word} key={word.id}/>
            ))}
        </tbody>
    
    </table>
    </>

    

)
  
}
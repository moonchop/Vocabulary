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
    const [word,setWords]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setWords(data);
        });
    },[day]);
    
   
  

    return (
    <>
    <h2>Day {day}</h2>
    {word.length === 0 && <span>Loading...</span>}
    <table>
        <tbody>
            {word.map(word=>(
               <Word word={word} key={word.id}/>
            ))}
        </tbody>
    
    </table>
    </>

    

)
  
}
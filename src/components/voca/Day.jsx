import {useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import Word from "./Word"
// URL에 포함된 값을 얻을 땐 useParams
export default function Day(){
    const day=useParams().day;
    
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
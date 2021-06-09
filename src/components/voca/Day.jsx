import dummy from "./data.json"
import {useParams} from "react-router-dom"
import Word from "./Word"
// URL에 포함된 값을 얻을 땐 useParams
export default function Day(){
    const day=useParams().day;
    
    const wordList = dummy.words.filter(word=> (
        word.day===Number(day)
    ))
    console.log(wordList);
    
   
  

    return (
    <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {wordList.map(word=>(
               <Word word={word} key={word.id}/>
            ))}
        </tbody>
    
    </table>
    </>

    

)
  
}
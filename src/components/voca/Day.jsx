import dummy from "./data.json"
import {useParams} from "react-router-dom"
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
            {wordList.map((word)=>(
                <tr key={word.id}>
                    <td>{word.eng}</td>
                    <td>{word.kor}</td>
                </tr>
            ))}
        </tbody>
    
    </table>
    </>

    

)
  
}
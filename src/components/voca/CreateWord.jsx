import React from 'react'
import useFetch from "../../hook/UseFetch"

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days")
    
    function onSubmit(e){
        e.preventDefault();
    }
    

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text"/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text"/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select>
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

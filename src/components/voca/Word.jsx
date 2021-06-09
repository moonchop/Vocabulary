import React from 'react'
import {useState} from 'react'
export default function Word({word}) {
    const [isShow,setIsShow]= useState(false);
    function toggleShow(){
        setIsShow(!isShow);
    }
    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>{word.eng}</td>
            <td>{isShow &&word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기': '보기'}</button>
                <button class="btn_del">삭제</button>
            </td>
    </tr>
    )
}

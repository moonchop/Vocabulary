import React from 'react'

export default function Event() {


    function showName() {
        console.log("Mike");
    }
    function showAge(age) {
        console.log(age);
    }

    function showText(txt) {
        console.log(txt)
    }
    function showTexte(e) {
        console.log(e.target.value)
    }
   
    



    return (
        <div>
            <div id="showName-Age">
                <h1>Hello</h1>
                <button onClick={showName}>Show name</button>
                {/* 함수를 이용해 이름을 이벤트 처리 */}
                <button onClick={() => {
                    showAge(40);
                }}>Show age</button>
                {/* 애로우와 함수를 이용해 이벤트 처리 (애로우는 매개변수를 전달하기편함) */}
            </div>


            <div id="showInput">
                <input type="text" onChange={(e) => { const txt = e.target.value; showText(txt) }} />
                {/*input에서 txt에 담아 함수에서 처리 */}
                <input type="text" onChange={showTexte} />
                {/*함수로만 처리 */}
                <input type="text" onChange={(e) => { console.log(e.target.value) }}/>
                {/* input안에서만 처리 */}
               
            </div>


        </div>
    )
}

////api로 데이터를 받아오는 부분을 useFetch로 구현
import {useState,useEffect} from 'react'


export default function UseFetch(url) {
    //1.api 주소를 넘겨받아서
    //DayList.jsx에서 훅으로 만듬    
    
    const [data,setData]= useState([]);
    //다른곳도 사용할수있게 변수명 data로
    useEffect(()=>{
    fetch(url) //2.fetch한다.
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        setData(data); //3.fetch 한 data를 setData해줌.
    });
},[url]);
    
    return data; //4. return
}


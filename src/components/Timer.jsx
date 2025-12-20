import React, { useEffect, useState } from 'react'

const Timer = ({timeover,current}) => {
 const [Time,Settime]=useState(30)

  useEffect(()=>{

     if(Time === 0){
     timeover();
     return;
     }

  let count = setTimeout(()=>
    {Settime(Time-1)},1000);

 return ()=> clearTimeout(count);
 },[Time]);

 useEffect(()=>{
  Settime(30)
 },[current]);

  return (
    <div>Time Left: {Time} second </div>
  )
}


export default Timer
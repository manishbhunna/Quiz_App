import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Username = () => {
  const Navigate=useNavigate();
  
  const nameRef=useRef();
  const ageRef=useRef();

  
  const HandleSubmit=(e)=>{
     e.preventDefault();
  const name=nameRef.current.value;
  const age=ageRef.current.value;

   Navigate('/Quiz',  {   state:{name,age}}
   ) 
  }
  return (
   
    <div className='QuizMain'>
       <div className='heading'>
        <div className='h-two mb-5'><h1 >Quiz Game</h1></div>
       </div>
    <div className='formdata'>
      <form className="form" onSubmit={HandleSubmit}>
    <input type="text" ref={nameRef} placeholder="Enter Student Name" /> <br /><br />
    <input type="text" ref={ageRef} placeholder="Enter Your Age"  /><br /><br />
  <button type="submit"  className='btn btn-primary'> Start Quiz </button>
</form>

    </div></div>
  )
}

export default Username
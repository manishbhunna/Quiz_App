import React from 'react'
import { useNavigate } from 'react-router-dom'

const Result = ({score}) =>{
     
     const navigate=useNavigate();
  return (
    <div className='text-center mt-5'>
      <h1>Your Score is {score}</h1>
    <button className='  btn btn-primary mt-5' onClick={()=>navigate('/')}> Restart</button>
    </div>)
  
}

export default Result
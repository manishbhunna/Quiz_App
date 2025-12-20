import React from 'react'
import Timer from './Timer'

const Test = ({question,options,answer,number,timer}) => {
  return (
    <div className='mt-2'>
      
    <Timer timeover={timer} current={number}></Timer>
       <h1 className='mt-4 mb-4'>Q.{number+1} {question}</h1> 
      {options.map((opt)=>(
        <div className='text-center'>
      <button key={opt} className='options  btn btn-primary btn-sm p-2' onClick={()=>answer(opt)} >{opt} </button> <br /> <br />
      
      </div>
    
      ))}

    </div>
  )
}

export default Test
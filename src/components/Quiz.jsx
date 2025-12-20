import React, { useState } from 'react'
import Test from './Test'
import questions from '../data/questions'
import Result from './Result';
import { useLocation } from 'react-router-dom';

const Quiz = () => {

  const[current,setcurrent]=useState(0);
  const[score,setscore]=useState(0);
  const[result,setresult]=useState(false);
  const {state}=useLocation();

  const AnswerHandler=(option)=>{
    if (option === questions[current].answer){
      setscore(score+1)
    }
    NextQuestion()
  }
   const TimeHandler=()=>{
     NextQuestion()
   }


   const NextQuestion=()=>{
    if(current+1 < questions.length){
    setcurrent(current+1)
    }
    else{
      setresult(true)
    }
   }

  return (
    <div className='QuizMain'>
    <div className='heading'>
      <div className='h-one'>Username:-{state?.name} {state?.age} </div>
      <div className='h-two'><h1 >Quiz Game</h1></div>
      <div className='h-three'>Question No. {current+1}/{questions.length} </div>
    </div>
    
    {result ? 
    ( <Result score={score} ></Result>):

    (<Test 
    question={questions[current].question}
    options={questions[current].options}
    answer={AnswerHandler}
    number={current}
    timer={TimeHandler}
    ></Test>)}
    
   
    </div>
  )
}

export default Quiz
import React from 'react';
import {useState , useRef} from "react";
import "../UI/container.css";
import {arr} from "./Words"; 

export default function Input(props) {
    const [ value , setValue ] = useState("");
    const divRef = useRef();
    const btnRef = useRef();

    const answerEN =()=>{
        const answer = arr[arr.indexOf(value)+1];
        return {answer}
    }
    const answerRU =()=>{
        const answer = arr[arr.indexOf(value)-1];
        return {answer}
    }

    if (/[a-zA-Z]/.test(value)){
        if(arr.includes(value))
        {
            divRef.current.innerHTML = answerEN().answer;
        }
    }else if(/[а-яА-Я]/.test(value)){
        if(arr.includes(value))
        {
            divRef.current.innerHTML = answerRU().answer;
        }
    }
    const getVoice = () =>{
        const word = divRef.current.innerHTML;
        const utterance = new SpeechSynthesisUtterance(word);
        window.speechSynthesis.speak(utterance);
    }

  return (
      <div>
        <div className = "col">
            <textarea onInput={event => setValue(event.target.value)} className = 'input' placeholder="Введите термин, который хотите перевести"></textarea>
            <div className="input" id = "output" ref = {divRef}>
                Тут будет определение термина
            </div>
        </div>
        <div className = "button__area">
            <div className = "button" onClick = {getVoice}>
                Прослушать
            </div>
        </div>
    </div>
  );
}

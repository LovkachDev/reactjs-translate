import React from 'react';
import "./UI/container.css";
import Input from "./Logic/Input";
export default function Main() {
  return(
    <div className = "ccontainer">
        <div className="tittle flex jcc">
            Translator - Современное приложение к учебнику Macmillan StudentsBook
        </div>
        <Input></Input>
    </div>
    )
}

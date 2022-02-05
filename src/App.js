import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Navvbar from "./components/Navvbar";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navvbar title = "Translator"></Navvbar>
      <Main></Main>
    </div>
  );
}

export default App;

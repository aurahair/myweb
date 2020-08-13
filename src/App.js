import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'
function App() {
  return (
  <div>
  <p>안녕하세요! </p>
  <button> 안녕 </button>
  <Button Primary> hi </Button>
    <Progress percent = {33}/>
    </div>
  );
}

export default App;

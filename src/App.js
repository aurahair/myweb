import React from 'react';
import {Button, Progress, Image} from 'semantic-ui-react'
import aa from "./신나는 놀이공원1.jpeg"
import bb from "./KakaoTalk_Photo_2020-08-10-23-51-51.jpeg"
import Comments from "./Comments.js"

function App() {
  return (
  <div>
  <p>포트폴리오</p>
  <p>김효선</p>
  <Button> 안녕 </Button>
  <Button Primary> hi </Button>
  <Progress percent = {33}/>
  <Image src = {aa} centered/>
  <Comments/>

  </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  let posts = '강남 고기 맛집';
  function func() {
      return 100;
  }
  let style1 = {color : 'blue', fontSize : '30px;'}

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']);  // state 데이터, state 데이터 변경함수가 a,b에 저장됨(ES6 destructing)
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ style1 }>개발 Blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]}</h3>
        <p>2월 17일 발행</p>
      </div>        
      <div className="list">
        <h3> {글제목[1]}</h3>
        <p>2월 17일 발행</p>
      </div>        
    </div>
  );
}

export default App;

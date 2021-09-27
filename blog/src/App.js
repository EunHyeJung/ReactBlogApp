/* eslint-disable */
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
  let [좋아요, 좋아요변경] = useState(0);

  function 제목변경() {
    var newArray = [...글제목]; // 복사본(deep copy)
    newArray[0] = '여자코드 추천';
    글제목변경(newArray); // state를 아예 대체해주는 함수
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ style1 }>개발 Blog</div>
      </div>
      <button onClick={ 제목변경 }>버튼</button>
      <div className="list">
        <h3> {글제목[0]} <span onClick={() => { {좋아요변경(좋아요 + 1) } }}>👍</span>{좋아요}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>        
      <div className="list">
        <h3> {글제목[1]}</h3>
        <p>9월 27일 발행</p>
        <hr/>
      </div>
      
      <Modal></Modal>  
              
    </div>
    
  );
}

function Modal() {
  return (
    <div className="modal">
        <h2>제목</h2>  
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  );
}

export default App;

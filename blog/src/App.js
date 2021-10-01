/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  let posts = '강남 고기 맛집';
  function func() {
      return 100;
  }
  let style1 = {color : 'blue', fontSize : '30px;'};

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);  // state 데이터, state 데이터 변경함수가 a,b에 저장됨(ES6 destructing)
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let[modal, modal변경] = useState(false); // 모달창 열고닫는 스위치

  function 제목변경() {
    var newArray = [...글제목]; // 복사본(deep copy)
    newArray[0] = '여자코드 추천';
    글제목변경(newArray); // state를 아예 대체해주는 함수
  }

  function 좋아요개별변경(idx) {
    var newArray = [...좋아요];
    newArray[idx] = 좋아요[idx] + 1;
    좋아요변경(newArray);
  }

  function 반복된UI() {
      var arr = [];

      for (var i = 0; i < 3; i++) {
        arr.push(<div>안녕</div>);
      }
      return arr;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ style1 }>개발 Blog</div>
      </div>
      {/* { 반복된UI() } */}

      {
        글제목.map(function(ele, idx) {
          return( <div className="list">
                  <h3>{ele} <span onClick={ () => {좋아요개별변경(idx)} }>👍</span>{좋아요[idx]}</h3>
                  <p> 10월 1일 발행 </p>
                  <hr/>
               </div>
          )
        })
      }


      <button onClick={ () => { modal변경(!modal)}}> 버튼  </button>
      {/* {
        modal === true
       ? <Modal/>
       : null // 텅빈 HTML 이라는 뜻
      } */
      modal === true
      ? <Modal />
      : null
    }
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

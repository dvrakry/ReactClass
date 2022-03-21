/* eslint-disable */

import React, { useState  } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['강북 맛집 추천', '강남 우동 맛집', '강남 초밥 맛집']);
  let [따봉, 따봉변경] = useState([0,0,0]);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  function 반복된UI(){
    var 어레이 = [];
    for (var i = 0; i < 3; i++){
      어레이.push(<div>안녕</div>)
    }

    return 어레이;
  }


  let posts = '강남 고기 맛집';

  // function 제목바꾸기(){
  //   var newArray = [...글제목];
  //   newArray[0] = '청량리 맛집 추천';
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ 제목바꾸기 }>버튼</button> */}
      {/* <div className='list'>
        <h4>{ 글제목[0] }  </h4>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 19일 발행</p>
        <hr/>
      </div> */}

      {/* { 반복된UI() } */}

      {
        글제목.map(function(a , i){
          return (
          <div className='list' key={ i }>
            <h4 onClick={ ()=>{ 누른제목변경(i) }}>{ a } <span onClick={ ()=>{ 따봉.map(function(i){
              return i+1;
            })} }>👍</span> {따봉}</h4>
            <p>2월 18일 발행</p>
            <hr/>
          </div>
          )
        })
      }


      {/* <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
      <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
      <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button> */}

      <div className="publish">
        <input onChange={ (e)=>{ 입력값변경(e.target.value)} }/>
        <button onClick={ ()=>{ 
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경( arrayCopy ) } }>저장</button>
      </div>

      <button onClick={()=>{modal변경(true)}}>열고닫기</button>

      {
        modal == true
        ? <Modal 글제목={글제목} 누른제목={누른제목}/>
        : null
      }
      
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2>{ props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;

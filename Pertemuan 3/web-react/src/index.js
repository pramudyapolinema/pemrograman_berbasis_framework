import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './LifeCycle';
import HelloComponent from './HelloComponent';
import Loginform from './tugas-login/form';

// function HelloComponent(){
//   return <p>HelloComponent</p>
// }
// class StateFullComponent extends Component {
//   render(){
//     return <p>StateFullComponent</p>
//   }
// }

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <HelloComponent/>,
  // <Test/>,
  <App/>,
  // <Loginform/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

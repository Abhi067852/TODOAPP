import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './Apps.js'
import './index.css';
// import navbar from './navbar'
// import footer from './footer'
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// function App()
// {
//  return (

//     <div>
//       <h1>
//         {/* ABHISHEK TIWARI
//       </h1>
//       <p style={{fontSize:100,fontFamily:"sans-serif",font:"message-box",padding:20,backgroundColor:"blue",width:"auto",display:"flex"}}>
//         Studying in nsit dwarka
//       </p>
//       <footer>
//         this is footer
//       </footer>
//     </div>
//   )
// } */}


ReactDOM.render((<Apps />),document.getElementById('root'));
//ReactDOM.render(<navbar />,document.getElementById('root'));
//ReactDOM.render(<ul><li>fsfs</li><li>fss</li></ul>,document.getElementById('root'));
var newp = document.createElement("p");
newp.innerHTML="Hi i am abhishek tiwari nice to meet you sir";


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Wellcome from './component/Wellcome';

function App() {
  // const name = "Buchet";
  // const naver = {
  //   name : "Naver",
  //   url : "https://www.naver.com"
  // }

  // return <div className="App">
  //   <h1 style={{
  //     color:"#fef",
  //     backgroundColor:"green",
  //   }}>Hello, {name}, <p>{ 2 + 3 }</p>
  //   </h1>
  //   <a href={naver.url}>{naver.name}</a>
  // </div>
  return <div className="App">
    <Hello />
    <Wellcome />
    </div>
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Buchet React</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
// import logo from './logo.svg';
import './App.css';

import DayList from './component/DayLIst';
import Day from './component/Day';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import DeleteDay from './component/DeleteDay';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

// import Hello from './component/Hello';
// import Welcome from './component/Welcome';
// import styles from './App.module.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="/delete_day" element={<DeleteDay />} />
          <Route path="*" element={<EmptyPage />}>
          </Route>
          {/* <Route path="/">
            <DayList />
          </Route>
          <Route path="/day">
            <Day />
          </Route> */}
        </Routes>

      </div>
    </BrowserRouter>
  );
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
  // return <div className="App">
  //     <h3>props : properties</h3>
  //     <Hello age={10}/>
  //     <Hello age={20}/>
  //     <Hello age={30}/>
  //     <Welcome />
  //     <div className={styles.box}>App</div>
  //     <Header />
  //   </div>
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
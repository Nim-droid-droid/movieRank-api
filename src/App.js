import logo from './logo.svg';
import './App.css';

import SideBar from "./components/Sidebar"


export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Movies API!
      </h1>
      <SideBar />
    </>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
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

// export default App;

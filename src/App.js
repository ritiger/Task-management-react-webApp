// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserContext from "./contexts/UserContext";
// import { useState } from "react";
// import Management from "./components/Management";
// import Services from "./components/Services";
// import LogoImage from "./components/LogoImage";

// const App = () => {
//   const [flag, setFlag] = useState(true);
//   const [show, setShow] = useState(true);

//   return (
//     <UserContext.Provider
//       value={{ flag: [flag, setFlag], show: [show, setShow] }}
//     >
//       <BrowserRouter>
//         <div id="main-header">
//           <div className="main-header-container">
//             <LogoImage />
//             <h1 style={{ marginLeft: "15px" }}>My Practice Website</h1>
//           </div>
//         </div>
//         <nav id="navbar">
//           <div className="main-container">
//             <ul>
//               <li>
//                 <a href="/">Home</a>
//               </li>
//               <li>
//                 <a href="/">About</a>
//               </li>
//               <li>
//                 <a href="/services">Services</a>
//               </li>
//               <li>
//                 <a href="/">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         <div className="goto">
//           <a href="/">Hello</a>
//         </div>

//         <Routes>
//           <Route exact path="/" element={<Management />} />
//           <Route exact path="/services" element={<Services />} />
//         </Routes>

//         <footer id="main-footer">
//           <p>Copyright &copy;2022 By RCH</p>
//         </footer>
//       </BrowserRouter>
//     </UserContext.Provider>
//   );
// };

// export default App;

//////////////////////////////// Using useReducer //////////////////////////////////

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useReducer } from "react";
import Management from "./components/Management";
import Services from "./components/Services";
import Album from "./components/Album";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import LogoImage from "./components/LogoImage";

const initialState = {
  flag: true,
  show: true,
};

function reducer(state, action) {
  return { ...state, ...action };
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div id="main-header">
          <div className="main-header-container">
            <LogoImage />
            <h1 style={{ marginLeft: "15px" }}>My Practice Website</h1>
          </div>
        </div>
        <nav id="navbar">
          <div className="main-container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/album">Album</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/signIn">Sign In</a>
              </li>
              <li>
                <a href="/signUp">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="goto">
          <a href="/">Hello</a>
        </div>

        <Routes>
          <Route exact path="/" element={<Management />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/album" element={<Album />} />
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/signUp" element={<SignUp />} />
        </Routes>

        <footer id="main-footer">
          <p>Copyright &copy;2022 By RCH</p>
        </footer>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;

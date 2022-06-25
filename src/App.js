import { BrowserRouter, Routes, Route } from "react-router-dom";
import Management from "./components/Management";
import Services from "./components/Services";
import LogoImage from "./components/LogoImage";

const App = () => {
  return (
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
              <a href="/">Contact</a>
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
      </Routes>

      <footer id="main-footer">
        <p>Copyright &copy;2022 By RCH</p>
      </footer>
    </BrowserRouter>
  );
};

export default App;

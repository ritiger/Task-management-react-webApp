// import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";

const Management = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [flag, setFlag] = useState(true);
  //   const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("[Flag Value]", flag);
  }, [flag]);

  return (
    <UserContext.Provider
      value={[flag, setFlag]}
      //   value={{ value: [flag, setFlag], value2: [show, setShow] }}
    >
      <div className="container">
        <Header
          onShow={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />
        {flag ? <Home showAddTask={showAddTask} /> : <About />}

        {/* <Routes>
        <Route exact path="/" element={<Home showAddTask={showAddTask} />} />
        <Route exact path="/about" element={<About />} />
      </Routes> */}
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default Management;

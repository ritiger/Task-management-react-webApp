import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";

const Management = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="container">
      <Header
        onShow={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />

      <Home showAddTask={showAddTask} />
      <About />

      {/* <Routes>
        <Route exact path="/" element={<Home showAddTask={showAddTask} />} />
        <Route exact path="/about" element={<About />} />
      </Routes> */}

      <Footer />
    </div>
  );
};

export default Management;
